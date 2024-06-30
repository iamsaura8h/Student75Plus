// src/App.jsx

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // State to manage the current page

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <LandingPage />;
      case 'about':
        return <AboutPage />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <div className="w-full h-full">
      <Navbar onNavClick={setCurrentPage} /> {/* Pass the state setter function to Navbar */}
      {renderPage()}
    </div>
  );
}

export default App;
