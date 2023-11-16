const Footer = () => {

    const vicGitHub = "https://github.com/PC-Vic";
    const josiahGitHub = "https://github.com/jtuvek";
    const cjGitHub = "https://github.com/cjmendenhall24";
    const cheikGitHub = "https://github.com/bchamidou";

    const handleLinkClick = (event, link) => {
        event.preventDefault();
        window.open(link, '_blank', 'noopener noreferrer');
    };

    return (

        <footer className="footer-container">
            <div className="footer-links">
                <a
                href={vicGitHub} 
                className="vicfoot"
                onClick={(e) => handleLinkClick(e, vicGitHub)}
                >Vic</a>
                <a 
                href={josiahGitHub}
                className="josiahfoot"
                onClick={(e) => handleLinkClick(e, josiahGitHub)}
                >Josiah</a>
                <a
                href={cjGitHub}
                className="cjfoot"
                onClick={(e) => handleLinkClick(e, cjGitHub)}
                >C.J.</a>
                <a
                href={cheikGitHub}
                className="cheikfoot"
                onClick={(e) => handleLinkClick(e, cheikGitHub)}
                >Cheik</a>
            </div>
        </footer>
    );
};

export default Footer;