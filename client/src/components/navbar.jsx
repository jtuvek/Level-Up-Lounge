import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faGamepad, } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const handleMouseEnter = (event, text) => {
    event.target.setAttribute('data-title', text);
  };

  const handleMouseLeave = (event) => {
    event.target.removeAttribute('data-title');
  };

  return (
    <nav className="navbar">
      <div className="sidebar-links">
        <Link
          to="/"
          className="home-link"
          onMouseEnter={(e) => handleMouseEnter(e, 'HOME')}
          onMouseLeave={handleMouseLeave}
        >
          <FontAwesomeIcon icon={faHome} />
        </Link>
        <Link
          to="/forums"
          className="forum-link"
          onMouseEnter={(e) => handleMouseEnter(e, 'FORUM')}
          onMouseLeave={handleMouseLeave}
        >
          <FontAwesomeIcon icon={faGamepad} />
        </Link>
        <Link
          to="/profile"
          className="users-link"
          onMouseEnter={(e) => handleMouseEnter(e, 'PROFILE')}
          onMouseLeave={handleMouseLeave}
        >
          <FontAwesomeIcon icon={faUser} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
