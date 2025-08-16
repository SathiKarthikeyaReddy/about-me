"""
Image processing API routes for the Sticker Generator
© 2025 Bohni Tech Pvt. Ltd. All rights reserved.
"""

from fastapi import APIRouter, UploadFile, File, Form, HTTPException
from fastapi.responses import JSONResponse
from PIL import Image, ImageEnhance
import io
import requests
import os

router = APIRouter()

REMOVE_BG_API_KEY = os.getenv("REMOVE_BG_API_KEY", "demo-key")  # Replace with your actual key

@router.post("/upload")
async def upload_image(file: UploadFile = File(...)):
    # Save uploaded image to memory
    contents = await file.read()
    try:
        img = Image.open(io.BytesIO(contents))
        img.verify()  # Validate image
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid image file.")
    # Optionally save to disk or process further
    return {"filename": file.filename, "message": "Image uploaded successfully."}

@router.post("/remove-background")
async def remove_background(file: UploadFile = File(...)):
    # Use remove.bg API for background removal
    response = requests.post(
        "https://api.remove.bg/v1.0/removebg",
        files={"image_file": (file.filename, await file.read())},
        data={"size": "auto"},
        headers={"X-Api-Key": REMOVE_BG_API_KEY},
    )
    if response.status_code != 200:
        raise HTTPException(status_code=500, detail="Background removal failed.")
    return JSONResponse(content={"image_base64": response.content.decode("latin1")})

@router.post("/apply-filters")
async def apply_filters(
    file: UploadFile = File(...),
    brightness: float = Form(1.0),
    saturation: float = Form(1.0),
    cartoonify: bool = Form(False)
):
    img = Image.open(io.BytesIO(await file.read())).convert("RGBA")
    # Brightness
    img = ImageEnhance.Brightness(img).enhance(brightness)
    # Saturation
    img = ImageEnhance.Color(img).enhance(saturation)
    # Cartoonify (simple edge enhancement)
    if cartoonify:
        img = img.filter(ImageFilter.EDGE_ENHANCE_MORE)
    buf = io.BytesIO()
    img.save(buf, format="PNG")
    buf.seek(0)
    return JSONResponse(content={"image_base64": buf.getvalue().decode("latin1")})

@router.post("/generate-sticker")
async def generate_sticker(file: UploadFile = File(...)):
    img = Image.open(io.BytesIO(await file.read())).convert("RGBA")
    img = img.resize((512, 512))
    buf = io.BytesIO()
    img.save(buf, format="WEBP", lossless=True)
    buf.seek(0)
    return JSONResponse(content={"sticker_webp": buf.getvalue().decode("latin1")})
