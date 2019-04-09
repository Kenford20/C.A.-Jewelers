import React from 'react';
import '../../styles/jewelry-styles/jewelry-header.css';

const JewelryHeader = () => {
    return ( 
        <div id="jewelry-header">
            <div id="wedding-header-text" style={{color: 'black'}}>
                <strong><h2> Fine Jewelry </h2>
                <h3> Elegant and </h3> 
                <h3> Dazzling Styles </h3></strong>
                <p style={{ textTransform: 'none'}}>Tempor cupidatat dolor commodo quis Lorem deserunt dolor aute tempor amet deserunt in.</p>
                <div>
                    <a href="../../engagement-rings"><button className="feature-btn"><strong>View All Jewelry</strong></button></a>
                </div>
            </div>
           <img src={require('../../images/jewelry/jewelry-banner3.jpg')}></img>
        </div>

     );
}
 
export default JewelryHeader;