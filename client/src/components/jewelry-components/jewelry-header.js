import React from 'react';
import '../../styles/jewelry-styles/jewelry-header.css';

const JewelryHeader = () => {
    return ( 
        <div id="jewelry-header">
            <div id="jewelry-header-image">
                <div id="jewelry-header-text">
                    <h2> <strong> Fine Jewelry </strong></h2>
                    <h3> Elegant and </h3> 
                    <h3> Dazzling Styles </h3>
                    <div>
                        <a href="../../engagement-rings"><button className="jewelry-btn"><strong>View All Jewelry</strong></button></a>
                    </div>
                </div>
            </div>
        </div>

     );
}
 
export default JewelryHeader;