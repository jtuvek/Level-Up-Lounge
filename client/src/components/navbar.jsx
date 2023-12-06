import { Link } from 'react-router-dom';
import siteLogo from '../assets/siteLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome, faUser, faGamepad} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

    return (
        <nav className="navbar">
            <img onClick={() => {Navigate('/')}} src={siteLogo} alt="website logo" className="site-logo" />
            <div className="sidebar-links">
                <Link to="/" className="home-link">
                    <FontAwesomeIcon icon={faHome} />
                </Link>
                <Link to="/forums" className="forum-link">
                    <FontAwesomeIcon icon={faGamepad} />
                </Link>
                <Link to="/profile" className="users-link">
                    <FontAwesomeIcon icon={faUser} />
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;