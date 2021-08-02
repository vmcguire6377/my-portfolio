import React from 'react';

// Props are passed through our functional component.
function NavTabs(props) {
  const tabs = ['About', 'Portfolio', 'Resume', 'Contact'];
  return (
    <header style={{
      backgroundImage: `url(https://i.imgur.com/bPIJZu6.jpg)`
    }} >
    <ul className="nav nav-tabs">
      {tabs.map(tab => (
        <li className="nav-item" key={tab}>
          <a
            href={'#' + tab.toLowerCase()}
            // Whenever a tab is clicked on,
            // the current page is set through the updatePageChange props.
            onClick={() => props.updatePageChange(tab)}
            className={
              props.currentPage === tab ? 'nav-link active' : 'nav-link'
            }
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
    </header>

 
  );

          }
export default NavTabs;
