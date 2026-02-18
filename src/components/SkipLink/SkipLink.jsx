import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';

const SkipLink = () => {
  const { t } = useTranslation();
  
  return (
    <a href="#main-content" className="skip-link">
      {t('common.skipToContent')}
    </a>
  );
};

export default SkipLink;
