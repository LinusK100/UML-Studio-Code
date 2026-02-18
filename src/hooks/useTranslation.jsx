import { useLanguage } from './useLanguage';
import { translations } from '../utils/translations';

export const useTranslation = () => {
  const { language } = useLanguage();
  
  const t = (key, params = {}) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    if (typeof value === 'string' && params) {
      return value.replace(/\{(\w+)\}/g, (match, key) => params[key] || match);
    }
    
    return value || key;
  };
  
  return { t, language };
};
