import React from 'react';
import '../../styles/home-styles/wedding-band.css';

const WeddingHeader = () => {
    return ( 
        <div id="wedding-bands">
            <a href="/wedding">
                <img src={require('../../images/wedding-bands/wedding4.jpg')} id="wedding-home-img"></img>
            </a>
            <div id="wedding-description" style={{ marginTop: '40px'}}>
                <h2 className="body-subtitles"> WEDDING BANDS </h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores dicta ut dignissimos quia iste repellat temporibus tempore molestiae. </p>
                <div id="wedding-links">
                    <a href="/wedding/mens-wedding-rings"> Shop Men's </a>
                    <a href="/wedding/womens-wedding-rings"> Shop Women's </a>
                </div>
            </div>
        </div>
     );
}
 
export default WeddingHeader;