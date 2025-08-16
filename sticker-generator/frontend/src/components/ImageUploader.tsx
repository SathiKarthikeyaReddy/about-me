// © 2025 Bohni Tech Pvt. Ltd. All rights reserved.
import React, { useRef } from 'react';

interface ImageUploaderProps {
  onImageSelected: (file: File) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageSelected }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onImageSelected(e.target.files[0]);
    }
  };

  return (
    <div className="dropzone" onClick={() => inputRef.current?.click()}>
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <p>Click or drag an image here to upload</p>
    </div>
  );
};

export default ImageUploader;
