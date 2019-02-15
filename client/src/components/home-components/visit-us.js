import React from 'react';
import '../../styles/home-styles/visit-us.css';

const VisitUs = () => {
    return ( 
        <div id="visit-us">
	        <div className="container text-center">
		        <h3 className="body-subtitles"> COME VISIT US </h3>
		        <p className="body-text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores dicta ut dignissimos quia iste repellat temporibus tempore molestiae, nesciunt pariatur labore culpa mollitia vel. Inventore vel, quod voluptas tempore fugit harum, recusandae ullam voluptatibus, voluptate culpa odio modi omnis minima repellat amet nobis quaerat labore tempora quae repudiandae numquam.</p> 
				<button className="feature-btn square-btn"><strong> Schedule an Appointment </strong></button>
			</div> 
	
	        <div id="container">
	            <div className="body-image" id="body-visit"></div>
	        </div>
        </div>
     );
}
 
export default VisitUs;