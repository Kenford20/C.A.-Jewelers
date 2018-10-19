import React from 'react';
import '../../styles/home-styles/color-stones-description.css';

const ColorStonesDescription = () => {
    return ( 
        <div id="color-stone-description">
            <div className="container-fluid text-center" id="body-color">
		        <h3 className="body-subtitles"> UNIQUE GEMSTONES </h3>
		        <p className="body-text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores dicta ut dignissimos quia iste repellat temporibus tempore molestiae.</p> 
		        <a href="./jewelry"><button className="feature-btn square-btn"><strong> Explore Jewelry </strong></button></a>
	        </div> 
        </div>
     );
}
 
export default ColorStonesDescription;