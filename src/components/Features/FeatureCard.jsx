import React from 'react';
import { IconContext } from 'react-icons';
import { 
  HiDocumentSearch, 
  HiCollection, 
  HiLink, 
  HiCode, 
  HiFolder, 
  HiUpload 
} from 'react-icons/hi';
import { useTranslation } from '../../hooks/useTranslation';
import './features.css';

const iconMap = {
  'doc.text.magnifyingglass': HiDocumentSearch,
  'rectangle.3.group': HiCollection,
  'arrow.left.and.right': HiLink,
  'chevron.left.forwardslash.chevron.right': HiCode,
  'folder.badge.gearshape': HiFolder,
  'square.and.arrow.up': HiUpload,
};

const FeatureCard = ({ feature, index }) => {
  const { t } = useTranslation();
  const IconComponent = iconMap[feature.icon] || HiCollection;
  const featureData = t('features.items', { returnObjects: true })?.[index] || feature;

  return (
    <div className="feature-card" style={{ '--feature-color': feature.color }}>
      <div className="feature-icon-wrapper">
        <IconContext.Provider value={{ size: '32px', color: feature.color }}>
          <IconComponent aria-hidden="true" />
        </IconContext.Provider>
      </div>
      <h3 className="feature-title">{featureData.title || feature.title}</h3>
      <p className="feature-description">{featureData.description || feature.description}</p>
    </div>
  );
};

export default FeatureCard;
