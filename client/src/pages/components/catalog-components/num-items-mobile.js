import React from 'react';

const NumItemsMobile = (props) => {

    const fontStyle = {
        fontFamily: 'Montserrat, Tahoma, serif',
        fontSize: '14px'
    };

    return ( 
        <div id="num-items-mobile">
            <div className="text-center" style={{margin:'15px'}}>
                <span style={fontStyle}> {props.numProducts} ITEMS </span>
            </div>
        </div>
     );
}
 
export default NumItemsMobile;