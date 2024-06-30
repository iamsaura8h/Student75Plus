import React from 'react';
import AttendanceCalculator from './AttendanceCalculator';
import './LandingPage.css';

function LandingPage() {
  const scrollToCalculator = () => {
    // Find the AttendanceCalculator element
    const calculatorElement = document.getElementById('attendance-calculator');
    // Scroll to it
    calculatorElement.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div className="relative inline-block">
        <img src="/images/44.png" alt="Example Image"/>
        <button 
          className="absolute button-style" 
          onClick={scrollToCalculator}
        >
          Try now 
        </button>
        <img src="/images/22.png" alt=""/>
      </div>
      
      <div id="attendance-calculator">
        <AttendanceCalculator />
        <br />
        <br />
      </div>
      <div>
      <footer className="bg-[#2d4849] text-white py-2">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Student75Plus. All rights reserved.</p>
        </div>
      </footer>
      </div>
    </div>
  );
}

export default LandingPage;
