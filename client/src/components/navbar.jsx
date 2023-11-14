

import { Link } from 'react-router-dom';

const Navbar = () => {


    return (
        <nav className="navbar">
            <h2>Level Up Lounge</h2>
            <div className="sidebar-links">
                <Link to="/" className="home-link">Home</Link>
                <Link to="/forums" className="forum-link">Forum</Link>
                <Link to="/profile" className="users-link">Users</Link>
            </div>
        </nav>
    );
}

export default Navbar;