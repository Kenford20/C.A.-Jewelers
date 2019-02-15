import React from 'react';
import '../../styles/footer-styles/socials.css';

const Socials = () => {
    return(
        <div id='socials'>
            <div id="socials-container">
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
                <a href="#"><i className="fab fa-twitch"></i></a>
            </div>
        </div>
    );
}

export default Socials;