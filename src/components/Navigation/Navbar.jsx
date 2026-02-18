import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { HiMenu, HiX, HiMoon, HiSun } from 'react-icons/hi';
import { useDarkMode } from '../../hooks/useDarkMode';
import { useLanguage } from '../../hooks/useLanguage';
import { useTranslation } from '../../hooks/useTranslation';
import './navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme, mounted } = useDarkMode();
  const { language, toggleLanguage, mounted: langMounted } = useLanguage();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation, then scroll
      setTimeout(() => {
        scrollToSection(targetId);
      }, 100);
    } else {
      // We're on home page, just scroll
      scrollToSection(targetId);
    }
    setIsMenuOpen(false);
  };

  const scrollToSection = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      // Get navbar height to offset scroll position
      const navbar = document.querySelector('.navbar');
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      // Scroll to top if already on home page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { id: 'home', label: t('nav.home') },
    { id: 'features', label: t('nav.features') },
    { id: 'code-generation', label: t('nav.codeGeneration') },
    { id: 'screenshots', label: t('nav.screenshots') },
    { id: 'use-cases', label: t('nav.useCases') },
    { id: 'download', label: t('nav.download') },
  ];

  if (!mounted || !langMounted) {
    return null;
  }

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <a 
            href="/" 
            onClick={handleLogoClick}
            className="navbar-logo"
            aria-label={t('nav.home')}
          >
            UML Studio Code
          </a>
        </div>

        <button
          className="navbar-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={t('nav.menuToggle')}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <HiX size="24px" /> : <HiMenu size="24px" />}
        </button>

        <div className={`navbar-menu ${isMenuOpen ? 'navbar-menu-open' : ''}`}>
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className="navbar-link"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="navbar-controls">
            <button
              className="navbar-language-toggle"
              onClick={toggleLanguage}
              aria-label={t('nav.languageToggle')}
              title={language === 'de' ? 'English' : 'Deutsch'}
            >
              {language === 'de' ? 'EN' : 'DE'}
            </button>
            <button
              className="navbar-theme-toggle"
              onClick={toggleTheme}
              aria-label={t('nav.themeToggle', { theme: theme === 'light' ? 'Dark' : 'Light' })}
            >
              {theme === 'light' ? (
                <HiMoon size="20px" aria-hidden="true" />
              ) : (
                <HiSun size="20px" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
