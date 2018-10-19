import React from 'react';

const Map = () => {
    const mapStyle = {
        width: '100%',
        height: '500px'
      };

    return ( 
        <div id="map">
            <iframe id="map-api" style={mapStyle} frameBorder="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.51172064668!2d-87.62784908411707!3d41.88185077922188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2ca4f5089f91%3A0xc4938c7ab3b72224!2sC+A+Jewelers!5e0!3m2!1sen!2sus!4v1506799532671"></iframe>
        </div>
     );
}
 
export default Map;