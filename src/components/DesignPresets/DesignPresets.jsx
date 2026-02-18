import React from 'react';
import PresetCard from './PresetCard';
import { designPresets } from '../../utils/constants';
import './designPresets.css';

const DesignPresets = () => {
  return (
    <section className="design-presets section" id="design">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Wählen Sie Ihr Design – von Classic bis Colorful</h2>
          <p className="section-description">
            Passen Sie das Aussehen Ihrer Diagramme an Ihre Präferenzen an. Von minimalistisch bis farbenfroh – alles ist möglich.
          </p>
        </div>
        <div className="presets-grid">
          {designPresets.map((preset) => (
            <PresetCard key={preset.id} preset={preset} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignPresets;
