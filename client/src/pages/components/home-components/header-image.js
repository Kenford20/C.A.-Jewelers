import React from 'react';
import '../../styles/home-styles/header-image.css';

const HeaderImage = () => {
    return ( 
        <div id="header-image-container">
            <div class="container-fluid d-flex" id="header-image">
                <div class="row justify-content-center align-self-center" id="header-text">
                    <h1 class="align-middle header-subtitle"> <strong> Witty Title </strong></h1>
                    <h2 class="container text-center header-subtitle subtitle-size"> Cute and </h2> 
                    <h2 class="header-subtitle subtitle-size"> Catchy Caption </h2>
                    <div class="container text-center">
                    <a href="../../engagement-rings"><button class="feature-btn"><strong>Browse Engagement Rings</strong></button></a>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default HeaderImage;