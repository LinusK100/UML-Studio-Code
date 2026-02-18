import React from 'react';
import './designPresets.css';

const PresetCard = ({ preset }) => {
  return (
    <div className="preset-card">
      <div 
        className="preset-preview" 
        style={{ 
          backgroundColor: preset.colors.background,
          borderColor: preset.colors.border 
        }}
      >
        <div className="preset-preview-content">
          <div 
            className="preset-preview-box"
            style={{ backgroundColor: preset.colors.accent }}
          ></div>
          <div 
            className="preset-preview-box preset-preview-box-small"
            style={{ backgroundColor: preset.colors.accent, opacity: 0.6 }}
          ></div>
        </div>
      </div>
      <h3 className="preset-name">{preset.name}</h3>
      <p className="preset-description">{preset.description}</p>
    </div>
  );
};

export default PresetCard;
