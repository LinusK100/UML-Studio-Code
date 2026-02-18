import React from 'react';
import { IconContext } from 'react-icons';
import { 
  HiLightningBolt, 
  HiStatusOffline, 
  HiDeviceMobile, 
  HiCloudUpload 
} from 'react-icons/hi';
import { useTranslation } from '../../hooks/useTranslation';
import { vorteile } from '../../utils/constants';
import './vorteile.css';

const iconMap = {
  'bolt.fill': HiLightningBolt,
  'wifi.slash': HiStatusOffline,
  'iphone': HiDeviceMobile,
  'square.and.arrow.up.on.square': HiCloudUpload,
};

const Vorteile = () => {
  const { t } = useTranslation();
  const vorteileData = t('vorteile.items', { returnObjects: true }) || vorteile;

  return (
    <section className="vorteile section" id="vorteile">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('vorteile.title')}</h2>
          <p className="section-description">
            {t('vorteile.description')}
          </p>
        </div>
        <div className="vorteile-list">
          {vorteile.map((vorteil, index) => {
            const IconComponent = iconMap[vorteil.icon] || HiLightningBolt;
            const isEven = index % 2 === 0;
            const vorteilData = vorteileData[index] || vorteil;
            
            return (
              <div 
                key={vorteil.id} 
                className={`vorteil-item ${isEven ? 'vorteil-left' : 'vorteil-right'}`}
              >
                <div className="vorteil-content">
                  <div className="vorteil-icon-wrapper">
                    <IconContext.Provider value={{ size: '40px', color: 'var(--color-primary-blue)' }}>
                      <IconComponent aria-hidden="true" />
                    </IconContext.Provider>
                  </div>
                  <div className="vorteil-text">
                    <h3 className="vorteil-title">{vorteilData.title || vorteil.title}</h3>
                    <p className="vorteil-description">{vorteilData.description || vorteil.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Vorteile;
