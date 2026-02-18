import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { LanguageProvider } from './hooks/useLanguage';
import Layout from './components/Layout/Layout';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Support from './pages/Support';
import Imprint from './pages/Imprint';
import './App.css';

// Component to handle GitHub Pages redirect from 404.html
function RedirectHandler() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if we have a redirect path from GitHub Pages 404.html
    // The 404.html script redirects to /?/path, so location.search will be ?/path
    const queryString = location.search;
    if (queryString && queryString.startsWith('?/')) {
      // Extract the path from the query parameter
      // Format: ?/path/to/page or ?/path&other=params
      const pathMatch = queryString.match(/^\?\/(.+?)(?:&|$)/);
      if (pathMatch) {
        let path = '/' + pathMatch[1].replace(/~and~/g, '&');
        // Clean up the path
        path = decodeURIComponent(path);
        // Navigate to the correct route
        navigate(path, { replace: true });
      }
    }
  }, [location, navigate]);

  return null;
}

function App() {
  // Get basename from package.json homepage
  // In production build, PUBLIC_URL is set from homepage field (/)
  // For local development, PUBLIC_URL is empty
  const basename = import.meta.env.BASE_URL || '';

  return (
    <LanguageProvider>
      <BrowserRouter basename={basename}>
        <RedirectHandler />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/privacy" element={<Layout><Privacy /></Layout>} />
          <Route path="/datenschutz" element={<Layout><Privacy /></Layout>} />
          <Route path="/support" element={<Layout><Support /></Layout>} />
          <Route path="/imprint" element={<Layout><Imprint /></Layout>} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
