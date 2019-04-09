import React from 'react';
import '../../styles/home-styles/header-image.css';

const HeaderImage = () => {
    return ( 
        <div id="header-image-container">
            <div id="header-image">
                <div id="header-text">
                    <h1 className="header-subtitle"> <strong> Witty Title </strong></h1>
                    <h2 className="header-subtitle subtitle-size"> Cute and </h2> 
                    <h2 className="header-subtitle subtitle-size"> Catchy Caption </h2>
                    <div>
                        <a href="/engagement"><button className="feature-btn"><strong>Browse Engagement Rings</strong></button></a>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default HeaderImage;