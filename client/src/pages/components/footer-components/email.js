import React from 'react';
import '../../styles/footer-styles/email.css';

const Email = () => {
    return ( 
        <div id="email-wrapper">
            <div id="email">
                <div>
                    <p id="email-title"> SIGN UP FOR OUR EMAIL LIST! </p>
                    <input type="email" className="form-control" placeholder="Enter email"></input>
                    <button type="submit" id="email-btn"> Subscribe </button>
                </div>
                <div>
                    <p id="email-disclaimer"> *By signing up you confirm that you have read the Privacy Policy and agree that your email will be collected and used by C.A. Jewelers for the purposes of sending news, promotions and updates via email. You can withdraw your consent at any time by unsubscribing or contacting us at <span style={{ textDecoration:'underline' }}>service@cajewelers.com.</span></p>
                </div>
            </div>  
        </div>
     );
}
 
export default Email;