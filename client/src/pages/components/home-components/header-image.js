import React from 'react';
import '../../styles/home-styles/header-image.css';

const HeaderImage = () => {
    return ( 
        <div id="header-image-container">
            <div className="container-fluid d-flex" id="header-image">
                <div className="row justify-content-center align-self-center" id="header-text">
                    <h1 className="align-middle header-subtitle"> <strong> Witty Title </strong></h1>
                    <h2 className="container text-center header-subtitle subtitle-size"> Cute and </h2> 
                    <h2 className="header-subtitle subtitle-size"> Catchy Caption </h2>
                    <div className="container text-center">
                    <a href="../../engagement-rings"><button className="feature-btn"><strong>Browse Engagement Rings</strong></button></a>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default HeaderImage;