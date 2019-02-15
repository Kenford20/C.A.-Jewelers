import React from 'react';
import PropTypes from 'prop-types';

const NumItemsMobile = ({ numProducts }) => {
    const fontStyle = {
        fontFamily: 'Montserrat, Tahoma, serif',
        fontSize: '14px'
    };

    return ( 
        <div id="num-items-mobile">
            <div className="text-center" style={{ margin:'15px' }}>
                <span style={fontStyle}> { numProducts } ITEMS </span>
            </div>
        </div>
     );
}

NumItemsMobile.propTypes = {
    numProducts: PropTypes.number.isRequired
};
 
export default NumItemsMobile;