import React from 'react';
import '../../styles/jewelry-styles/jewelry-header.css';

const JewelryHeader = () => {
    return ( 
        <div id="jewelry-header">
            <div className="container-fluid d-flex" id="jewelry-header-image">
                <div className="row justify-content-center align-self-center" id="jewelry-header-text">
                    <h2 className="align-middle"> <strong> Fine Jewelry </strong></h2>
                    <h3 className="container text-center"> Elegant and </h3> 
                    <h3> dazzling styles </h3>
                    <div className="container text-center">
                    <a href="../../engagement-rings"><button className="jewelry-btn"><strong>View All Jewelry</strong></button></a>
                    </div>
                </div>
            </div>
        </div>

     );
}
 
export default JewelryHeader;