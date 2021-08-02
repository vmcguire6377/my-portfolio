import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';


function Projects() {
  // Using useState, set the default value for currentPage to 'About'
  const [currentPage, updatePageChange] = useState('About');

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About />;
        case 'Portfolio':
          return <Portfolio />;
      case 'Resume':
        return <Resume />;
      case 'Contact':
        return <Contact />;
        default:
          return <About />;
    }
  };

  return (
    <div>
      <NavTabs currentPage={currentPage} updatePageChange={updatePageChange} />
      <div>{renderPage(currentPage)}</div>
    </div>
  );
}

export default Projects;
