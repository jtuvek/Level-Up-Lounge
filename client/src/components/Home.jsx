import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    return (  
    
        <div className="home">
            <h1>Welcome to Level Up Lounge!</h1>
            <div className='button-container'>
            </div>
            <Link to="/signup">
                <button className="join-btn">Join the Community</button>
            </Link>
        </div>
    
    );
};

export default Home;