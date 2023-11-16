import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className="header">
            <h1></h1>
            <div className="header-links-container">
                <Link to="/login" className="login-link">Login</Link>
                <Link to="/signup" className="signup-link">SignUp</Link>
            </div>
        </div>
    );
}

export default Header;