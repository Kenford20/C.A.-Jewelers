import React from 'react';

const Subscribe = () => {
    return ( 
        <div>
            <div>
                <div className="text-center" id="subscribe">
                    <h6> Join newsletter to get free stuff! </h6>
                    <input type="email" className="form-control" placeholder="Enter email"></input>
                    <button type="submit" id="email-btn"> Subscribe </button>
                </div>  
            </div>
        </div>
     );
}
 
export default Subscribe;