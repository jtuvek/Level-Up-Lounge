import { Link } from 'react-router-dom';
import kratos from "../assets/kratos.png";


const Home = () => {

    return (  
    <>
        <div className="home">
            <h1>Welcome to Level Up Lounge!</h1>
            <div className='button-container'>
                <Link to="/signup">
                    <button className="join-btn">Join the Community</button>
                </Link>
            </div>
        </div>

        {/* Why join Section */}
        <div className="why-join-section">
            <h2>WHY JOIN THE LOUNGE?</h2>
            <img
                src={kratos}
                alt="Kratos"
                className='kratos-image'
            />
        </div>

        {/* Cards Why join Section*/}
        <section className='join-cards-container'>
            <div className='join-cards join-card-1'>
                <h3>Friendly Community</h3>
                <p>Engage in conversations with a diverse community of gamers who share similar interests and passion for gaming. Whether you're into strategy games, role-playing games, or multiplayer action, find and connect with like-minded individuals who understand and appreciate your gaming preferences</p>
            </div>

            <div className='join-cards join-card-2'>
                <h3>Gaming Trends and News</h3>
                <p>Get exclusive access to the latest gaming trends, news, and updates within the 'Level Up Lounge' community. Stay informed about upcoming game releases, industry events, and gaming strategies shared by experienced players. Be part of discussions that keep you at the forefront of the gaming world.</p>
            </div>

            <div className='join-cards join-card-3'>
                <h3>Form Gaming Squads</h3>
                <p> Form gaming squads, join forces in competitive tournaments, and enhance your gaming experience by playing alongside skilled and friendly teammates. 'Level Up Lounge' provides a platform to find teammates, share gaming tips, and participate in group gaming sessions.</p>
            </div>
        </section>
    </>
    
    );
};

export default Home;