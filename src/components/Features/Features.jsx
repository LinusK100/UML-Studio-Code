import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import FeatureCard from './FeatureCard';
import { features } from '../../utils/constants';
import './features.css';

const Features = () => {
  const { t } = useTranslation();

  return (
    <section className="features section" id="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('features.title')}</h2>
          <p className="section-description">
            {t('features.description')}
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
