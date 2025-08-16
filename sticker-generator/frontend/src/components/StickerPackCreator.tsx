// © 2025 Bohni Tech Pvt. Ltd. All rights reserved.
import React, { useState } from 'react';

interface StickerPackCreatorProps {
  stickers: string[]; // URLs or base64
  onCreatePack: (packName: string) => void;
}

const StickerPackCreator: React.FC<StickerPackCreatorProps> = ({ stickers, onCreatePack }) => {
  const [packName, setPackName] = useState('');
  return (
    <div className="sticker-pack">
      <input
        className="input-field"
        placeholder="Sticker Pack Name"
        value={packName}
        onChange={e => setPackName(e.target.value)}
      />
      <button className="btn-primary" onClick={() => onCreatePack(packName)} disabled={!packName}>
        Create Sticker Pack
      </button>
      <div className="sticker-grid">
        {stickers.map((s, i) => (
          <img key={i} src={s} alt={`Sticker ${i + 1}`} style={{ width: 64, height: 64 }} />
        ))}
      </div>
    </div>
  );
};

export default StickerPackCreator;
