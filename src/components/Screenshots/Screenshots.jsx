import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import ScreenshotGallery from './ScreenshotGallery';
import './screenshots.css';

// Import iPhone Screenshots
import iPhone1 from '../../assets/images/iPhone/iPhone_Teil_1.png';
import iPhone2 from '../../assets/images/iPhone/iPhone_Teil_2.png';
import iPhone3 from '../../assets/images/iPhone/iPhone_Teil_3.png';
import iPhone4 from '../../assets/images/iPhone/iPhone_Teil_4.png';
import iPhone5 from '../../assets/images/iPhone/iPhone_Teil_5.png';
import iPhone6 from '../../assets/images/iPhone/iPhone_Teil_6.png';
import iPhone7 from '../../assets/images/iPhone/iPhone_Teil_7.png';
import iPhone8 from '../../assets/images/iPhone/iPhone_Teil_8.png';
import iPhone9 from '../../assets/images/iPhone/iPhone_Teil_9.png';
import iPhone10 from '../../assets/images/iPhone/iPhone_Teil_10.png';

// Import iPad Screenshots
import iPad1 from '../../assets/images/iPad/iPad_Teil_1.png';
import iPad2 from '../../assets/images/iPad/iPad_Teil_2.png';
import iPad3 from '../../assets/images/iPad/iPad_Teil_3.png';
import iPad4 from '../../assets/images/iPad/iPad_Teil_4.png';
import iPad5 from '../../assets/images/iPad/iPad_Teil_5.png';
import iPad6 from '../../assets/images/iPad/iPad_Teil_6.png';
import iPad7 from '../../assets/images/iPad/iPad_Teil_7.png';
import iPad8 from '../../assets/images/iPad/iPad_Teil_8.png';
import iPad9 from '../../assets/images/iPad/iPad_Teil_9.png';
import iPad10 from '../../assets/images/iPad/iPad_Teil_10.png';

const Screenshots = () => {
  const { t } = useTranslation();
  const iPhoneImages = [iPhone1, iPhone2, iPhone3, iPhone4, iPhone5, iPhone6, iPhone7, iPhone8, iPhone9, iPhone10];
  const iPadImages = [iPad1, iPad2, iPad3, iPad4, iPad5, iPad6, iPad7, iPad8, iPad9, iPad10];

  return (
    <section className="screenshots section" id="screenshots">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('screenshots.title')}</h2>
          <p className="section-description">
            {t('screenshots.description')}
          </p>
        </div>
        
        <div className="screenshots-section">
          <div className="device-section">
            <h3 className="device-title">{t('screenshots.iphone')}</h3>
            <ScreenshotGallery images={iPhoneImages} deviceType="iphone" />
          </div>
          
          <div className="device-section">
            <h3 className="device-title">{t('screenshots.ipad')}</h3>
            <ScreenshotGallery images={iPadImages} deviceType="ipad" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
