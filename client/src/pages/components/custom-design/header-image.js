import React from 'react';
import '../../styles/home-styles/header-image.css';

const DesignHeader = () => {
    return ( 
        <div id="design-header">
            <div class="container-fluid d-flex" id="design-header-image">
                <div class="row text-center justify-content-center align-self-center header-width" id="header-text">
                    <h1 class="container header-subtitle color-black"> <strong> Custom Designed <br></br>Jewelry</strong></h1>
                    <h2 class="header-subtitle subtitle-size color-black"> The C.A. Process </h2>
                </div>
            </div>
        </div>
     );
}
 
export default DesignHeader;