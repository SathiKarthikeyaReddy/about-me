# Sticker Generator - Powered by Bino WhatsApp Search AI

A full-stack web application that allows users to upload photos and create personalized WhatsApp stickers with AI-powered background removal and emoji-style filters.

## 🚀 Features
- Upload & edit images (web/mobile-friendly)
- AI background removal (remove.bg API)
- Face detection & cartoonify filters
- WhatsApp sticker export (.webp, 512x512px, transparent)
- Bundle stickers into packs
- Bino AI promotion and search integration
- No data retention; secure user privacy

## 🛠️ Tech Stack
- **Frontend:** React + TypeScript + Tailwind CSS
- **Backend:** FastAPI (Python), OpenCV, Pillow, remove.bg

## 📁 Project Structure
```
sticker-generator/
├── frontend/                 # React frontend
│   └── src/components/      # Main React components
├── backend/                 # FastAPI backend
│   └── app/api/             # API endpoints
└── README.md
```

## ⚡ Quick Start
1. Clone the repo
2. Set up backend: `cd backend && pip install -r requirements.txt && uvicorn app.main:app --reload`
3. Set up frontend: `cd frontend && npm install && npm start`
4. Open [http://localhost:3000](http://localhost:3000)

## 📝 License
© 2025 Bohni Tech Pvt. Ltd. All rights reserved.

---
**Powered by Bino WhatsApp Search AI**
