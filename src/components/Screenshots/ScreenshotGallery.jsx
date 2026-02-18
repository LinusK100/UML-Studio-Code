import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight, HiX } from 'react-icons/hi';
import './screenshots.css';

const ScreenshotGallery = ({ images, deviceType }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const goToNext = (e) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % images.length);
    }
  };

  const goToPrevious = (e) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length);
    }
  };

  const goToImage = (index, e) => {
    e?.stopPropagation();
    setSelectedImageIndex(index);
  };

  // Keyboard navigation
  useEffect(() => {
    if (selectedImageIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        setSelectedImageIndex((selectedImageIndex + 1) % images.length);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, images.length]);

  return (
    <div className="screenshot-gallery-wrapper">
      {selectedImageIndex === null ? (
        <div className={`screenshot-gallery ${deviceType}`}>
          {images.map((image, index) => (
            <div 
              key={index} 
              className="screenshot-item"
              onClick={() => openLightbox(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(index);
                }
              }}
              aria-label={`Screenshot ${index + 1} öffnen`}
            >
              <img 
                src={image} 
                alt={`${deviceType} Screenshot ${index + 1}`}
                loading="lazy"
                className="screenshot-image"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="screenshot-detail-view">
          <div className="screenshot-detail-content">
            <div className="screenshot-detail-image-container">
              <button 
                className="screenshot-detail-close"
                onClick={closeLightbox}
                aria-label="Zurück zur Übersicht"
              >
                <HiX size="24px" aria-hidden="true" />
              </button>

              <button
                className="screenshot-detail-nav screenshot-detail-nav-prev"
                onClick={goToPrevious}
                aria-label="Vorheriges Bild"
              >
                <HiChevronLeft size="32px" aria-hidden="true" />
              </button>

              <img 
                src={images[selectedImageIndex]} 
                alt={`Vergrößerter Screenshot ${selectedImageIndex + 1}`}
                className="screenshot-detail-image"
              />

              <button
                className="screenshot-detail-nav screenshot-detail-nav-next"
                onClick={goToNext}
                aria-label="Nächstes Bild"
              >
                <HiChevronRight size="32px" aria-hidden="true" />
              </button>
            </div>

            <div className="screenshot-detail-thumbnails">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`screenshot-detail-thumbnail ${index === selectedImageIndex ? 'active' : ''}`}
                  onClick={(e) => goToImage(index, e)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      goToImage(index, e);
                    }
                  }}
                  aria-label={`Zu Screenshot ${index + 1} wechseln`}
                >
                  <img 
                    src={image} 
                    alt={`Thumbnail ${index + 1}`}
                    className="screenshot-detail-thumbnail-image"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScreenshotGallery;
