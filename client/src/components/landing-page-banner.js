import React from 'react';

const LandingPageBanner = ({ bannerID, route, imgKey, imgID, captionTitle, captionText, captionLink, reverse }) => {
    const imgPaths = {
        'wedding1': require('../images/wedding-bands/wedding-page1.jpg'),
        'wedding2': require('../images/wedding-bands/wedding-page3.jpg'),
        'engagement1': require('../images/engagement-rings/halo-banner.jpg'),
        'engagement2': require('../images/engagement-rings/solitaire-banner.jpg'),
        'engagement3': require('../images/engagement-rings/vintage-banner.jpg'),
        'engagement4': require("../images/engagement-rings/three-stone-banner.jpg"),
        'jewelry1': require('../images/jewelry/popular-earrings.jpg'),
        'jewelry2': "https://s3.amazonaws.com/media-cajewelers.com/bracelet.jpg",
        'jewelry3': "https://s3.amazonaws.com/media-cajewelers.com/NecklaceClose.jpg",
        'jewelry4': require("../images/purple-halo.jpeg")
    }

    return ( 
        <div id={ bannerID } className="landing-page-banners">
            <a href={ route } style={{ order: reverse ? '2' : '1' }}>
                <img 
                    src={ imgPaths[imgKey] } 
                    id={ imgID }
                    className="landing-page-images"
                />
            </a>
            <div className="landing-page-banner-descriptions" style={{ order: reverse ? '1' : '2' }}>
                <h4 className="landing-page-caption-title">{ captionTitle }</h4>
                <p className="landing-page-caption-text">{ captionText }</p>
                <a href={ route }><h5 className="landing-page-caption-link">{ captionLink }</h5></a>
            </div>
        </div>
    );
}
 
export default LandingPageBanner;