import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faGamepad, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isSidebarExpanded, setIsSideBarExpanded] = useState (true);

    const toggleSidebar = () => {
        setIsSideBarExpanded(!isSidebarExpanded);
    };

    const handleMouseEnter = (event, text) => {
        event.target.setAttribute('data-title', text);
    };

    const handleMouseLeave = (event) => {
        event.target.removeAttribute('data-title');
    };


    return (
    <nav className={`navbar ${isSidebarExpanded ? 'expanded' : 'collapsed'}`}>
    <div className={`sidebar-links ${isSidebarExpanded ? 'expanded' : 'collapsed'}`}>
      {/* Add an icon or button to toggle the sidebar */}
      <div className="toggle-icon" onClick={toggleSidebar}>
        <FontAwesomeIcon className='chevron-icon' icon={isSidebarExpanded ? faChevronLeft : faChevronRight} />
      </div>
        
      {/* Links */}
      <Link
        to="/"
        className="home-link"
        onMouseEnter={(e) => handleMouseEnter(e, 'HOME')}
        onMouseLeave={handleMouseLeave}
      >
        <FontAwesomeIcon icon={faHome} />
        {isSidebarExpanded && <span className="text-container">HOME</span>}
      </Link>
      <Link
        to="/forums"
        className="forum-link"
        onMouseEnter={(e) => handleMouseEnter(e, 'FORUM')}
        onMouseLeave={handleMouseLeave}
      >
        <FontAwesomeIcon icon={faGamepad} />
        {isSidebarExpanded && <span className="text-container">FORUM</span>}
      </Link>
      <Link
        to="/profile"
        className="users-link"
        onMouseEnter={(e) => handleMouseEnter(e, 'PROFILE')}
        onMouseLeave={handleMouseLeave}
      >
        <FontAwesomeIcon icon={faUser} />
        {isSidebarExpanded && <span className="text-container">PROFILE</span>}
      </Link>
    </div>
  </nav>
);
};
export default Navbar;