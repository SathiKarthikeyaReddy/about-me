// © 2025 Bohni Tech Pvt. Ltd. All rights reserved.
import React from 'react';

interface StickerPreviewProps {
  imageUrl: string;
}

const StickerPreview: React.FC<StickerPreviewProps> = ({ imageUrl }) => (
  <div className="sticker-preview">
    <img src={imageUrl} alt="Sticker Preview" style={{ maxWidth: 200, maxHeight: 200 }} />
    <div className="bino-badge">Powered by Bino WhatsApp Search AI</div>
  </div>
);

export default StickerPreview;
