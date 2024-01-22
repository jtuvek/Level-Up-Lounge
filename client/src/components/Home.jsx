import React from 'react';
import { Link } from 'react-router-dom';
import kratos from "../assets/kratos.png"

const Home = () => {

    return (  
    <>
        <div className="home">
            <h1>Welcome to Level Up Lounge!</h1>
            <div className='button-container'>
            </div>
            <Link to="/signup">
                <button className="join-btn">Join the Community</button>
            </Link>
        </div>

        {/* Why join Section */}
        <div className="why-join-section">
            <h2>Why join the Lounge?</h2>
            <img
                src={kratos}
                alt="Kratos"
                className='kratos-image'
            />
        </div>
    </>
    
    );
};

export default Home;