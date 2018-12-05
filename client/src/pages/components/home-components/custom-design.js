import React from 'react';
import '../../styles/home-styles/custom-design.css';

const CustomDesign = () => {
    return ( 
        <div id="custom-design">
            {/* <div className="wrapper">
                <div className="body-images zoom-in" id="custom-design-image">
                    <div className="zoom-out"></div>
                </div>
            </div> */}
            <video width="100%" height="500px" muted={true} autoPlay={true} loop={true} playsInline={true} preload="none" poster="https://s3.amazonaws.com/media-cajewelers.com/diamonds-poster.jpg" className="hidden-xs">
                <source src="https://s3.amazonaws.com/media-cajewelers.com/rotating-diamonds.mp4" type="video/mp4"></source>
            </video>


            <div className="container-fluid text-center" id="body-design">
                <h3 className="body-subtitles"> CUSTOM DESIGN AND MANUFACTURING </h3>
                <p className="body-text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores dicta ut dignissimos quia iste repellat temporibus tempore molestiae, nesciunt pariatur labore culpa mollitia vel. Inventore vel, quod voluptas tempore fugit harum, recusandae ullam voluptatibus, voluptate culpa odio modi omnis minima repellat amet nobis quaerat labore tempora quae repudiandae numquam.</p> 
                <a href="/custom-design-jewelry" className="feature-btn square-btn text-dec-none"><strong> Learn More </strong></a>
            </div>
        </div>
     );
}
 
export default CustomDesign;