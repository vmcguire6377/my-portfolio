import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';


function Portfolio() {
  // Using useState, set the default value for currentPage to 'Home'
  const [currentPage, handlePageChange] = useState('About');

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About />;
      case 'Resume':
        return <Resume />;
      case 'Contact':
        return <Contact />;
    }
  };

  return (
    <div>
      {/* Pass the state value and the setter as props to NavTabs */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Call the renderPage function passing in the currentPage */}
      <div>{renderPage(currentPage)}</div>
    </div>
  );
}

export default Portfolio;
