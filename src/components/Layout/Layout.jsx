import React from 'react';
import SkipLink from '../SkipLink/SkipLink';
import Navbar from '../Navigation/Navbar';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  return (
    <div className="App">
      <SkipLink />
      <Navbar />
      <main id="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
