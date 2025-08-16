// © 2025 Bohni Tech Pvt. Ltd. All rights reserved.
import React from 'react';

interface FiltersPanelProps {
  brightness: number;
  saturation: number;
  cartoonify: boolean;
  onChange: (filters: { brightness: number; saturation: number; cartoonify: boolean }) => void;
}

const FiltersPanel: React.FC<FiltersPanelProps> = ({ brightness, saturation, cartoonify, onChange }) => (
  <div className="filter-panel">
    <label>Brightness
      <input type="range" min={0.5} max={2} step={0.01} value={brightness} onChange={e => onChange({ brightness: parseFloat(e.target.value), saturation, cartoonify })} />
    </label>
    <label>Saturation
      <input type="range" min={0.5} max={2} step={0.01} value={saturation} onChange={e => onChange({ brightness, saturation: parseFloat(e.target.value), cartoonify })} />
    </label>
    <label>
      <input type="checkbox" checked={cartoonify} onChange={e => onChange({ brightness, saturation, cartoonify: e.target.checked })} /> Cartoonify
    </label>
  </div>
);

export default FiltersPanel;
