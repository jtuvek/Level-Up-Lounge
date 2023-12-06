import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    return (  
        <div className="home-container">
            <div className="home">
                <h1>Welcome to Level Up Lounge!</h1>
                <Link to="/signup">
                <button className="join-btn">Join the Community</button>
                </Link>
            </div>
        </div>
    );

}

export default Home;