import React from 'react';

import '../styles/spinner.css';

const Spinner = () => {
    return ( 
        <div id="catalog-spinner">
            <img src={require("../images/logo.png")} alt="loading spinner"></img>
        </div>
    );
}
 
export default Spinner;