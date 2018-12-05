import React from 'react';

const SimilarNecklaces = () => {
    return ( 
        <div id="similar-necklaces">
            <h2 className="text-center">Similar Products</h2>
            <div className="text-center m-auto">
            <div className="row container">

                <div className="col-lg-2">
                    <img className="similar-product-image" src={"https://s3.amazonaws.com/media-cajewelers.com/BeadSet.jpg"} alt="Card image cap"></img>
                    <h2>Some Necklace</h2>
                </div>
                <div className="col-lg-2">
                    <img className="similar-product-image" src={"https://s3.amazonaws.com/media-cajewelers.com/BeadSet.jpg"} alt="Card image cap"></img>
                    <h2>Some Other Necklace</h2>
                </div>
                <div className="col-lg-2">
                    <img className="similar-product-image" src={"https://s3.amazonaws.com/media-cajewelers.com/BeadSet.jpg"} alt="Card image cap"></img>
                    <h2>Some Other Necklace</h2>
                </div>
                <div className="col-lg-2">
                    <img className="similar-product-image" src={"https://s3.amazonaws.com/media-cajewelers.com/BeadSet.jpg"} alt="Card image cap"></img>
                    <h2>Some Other Necklace</h2>
                </div>
                <div className="col-lg-2">
                    <img className="similar-product-image" src={"https://s3.amazonaws.com/media-cajewelers.com/BeadSet.jpg"} alt="Card image cap"></img>
                    <h2>Some Other Necklace</h2>
                </div>
                </div>
            </div>
        </div>
     );
}
 
export default SimilarNecklaces;