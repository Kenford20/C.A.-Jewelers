import React from 'react';
import '../../styles/home-styles/popular.css';

const PopularProducts = () => {
    return ( 
        <div id="popular-products">
            <h3 className="body-subtitles text-center">C.A. FAVORITES</h3>
            <div id="popular-images">
                <div className="row container m-auto">
            
                    <div className="col-sm-6 col-md-3 col-l-3 p-1">
                        <div className="text-center">
                        <a href="#"><img src={"https://s3.amazonaws.com/media-cajewelers.com/TennisBracelets.jpg"} alt="Tennis Bracelets"></img></a>
                        <div className="mt-10" id="abcd"><a href="#"> SHOP TENNIS BRACELETS </a></div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-l-3 p-1">
                        <div className="text-center">
                        <a href="#"><img src={"https://s3.amazonaws.com/media-cajewelers.com/SapphireRing-resized.jpg"} alt="Sapphire Ring"></img></a>
                        <div className="mt-10"><a href="#" > SHOP SAPPHIRE RINGS </a></div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-l-3 p-1">
                        <div className="text-center">
                        <a href="#"><img id="product"  src={"https://s3.amazonaws.com/media-cajewelers.com/Necklace2.jpg"} alt="Necklace on mannequin"></img></a>
                        <div className="mt-10"><a href="#"> SHOP DIAMOND NECKLACES </a></div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-l-3 p-1">
                        <div className="text-center">
                        <a href="#"><img src={"https://s3.amazonaws.com/media-cajewelers.com/RubyTourmalineRing.jpg"} alt="Ruby Tourmaline Ring"></img></a>
                        <div className="mt-10"><a href="#"> SHOP GEMSTONE RINGS </a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default PopularProducts;