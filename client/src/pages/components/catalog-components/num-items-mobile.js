import React from 'react';

const NumItemsMobile = (props) => {

    const fontStyle = {
        fontFamily: 'Slabo 27px',
        fontSize: '14px'
    };

    return ( 
        <div id="num-items-mobile">
            <div class="text-center" style={{margin:'15px'}}>
                <span style={fontStyle}> {props.numProducts} ITEMS </span>
            </div>
        </div>
     );
}
 
export default NumItemsMobile;