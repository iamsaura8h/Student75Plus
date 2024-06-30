import React from 'react';
import './AboutPage.css';

const AboutMePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-dm-sans">
      {/* Header */}
      <header className="bg-[#2d4849] text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <h1 id='ab' className="text-4xl font-bold tracking-wide">About Me</h1>
        </div>
      </header>
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Introduction Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-gray-800 font-medium">
          Hello, I'm Saurabh from St. Martin's IT department. This is the second version of this website, made with React.js. 
          I designed it to help you easily track your attendance during the semester.
          </p>
        </section>

        {/* Skills Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Tech Stack used to build this website</h2>
          <ul className="list-disc list-inside text-gray-800 font-medium">
            <li>React.js</li>
            <li>Node.js</li>
            <li>Tailwind CSS</li>
            <li>HTML/CSS/JavaScript</li>
            <li>Fonts - Canva & Google</li>
            <li>UI/UX Design - Canva</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#ccf4e5] rounded-lg shadow-md p-4">
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-gray-800 font-medium">saurabh@gmail.com</p>
            </div>
            <div className="bg-[#ccf4e5] rounded-lg shadow-md p-4">
              <h3 className="text-lg font-semibold">Location</h3>
              <p className="text-gray-800 font-medium">Hyderabad, Telangana</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#2d4849] text-white py-2">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Saurabh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default AboutMePage;
