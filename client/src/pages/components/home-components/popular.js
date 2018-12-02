import React from 'react';
import '../../styles/home-styles/popular.css';

const PopularProducts = () => {
    return ( 
        <div id="popular-products">
            <h3 class="body-subtitles text-center">C.A. FAVORITES</h3>
            <div id="popular-images">
                <div class="row container m-auto">
            
                    <div class="col-sm-6 col-md-3 col-l-3 p-1">
                        <div class="text-center">
                        <a href="#"><img src={"https://s3.amazonaws.com/media-cajewelers.com/TennisBracelets.jpg"} alt="Tennis Bracelets"></img></a>
                        <div class="mt-10"><a href="#"> SHOP TENNIS BRACELETS </a></div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3 col-l-3 p-1">
                        <div class="text-center">
                        <a href="#"><img src={"https://s3.amazonaws.com/media-cajewelers.com/SapphireRing.jpg"} alt="Sapphire Ring"></img></a>
                        <div class="mt-10"><a href="#" > SHOP SAPPHIRE RINGS </a></div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3 col-l-3 p-1">
                        <div class="text-center">
                        <a href="#"><img id="product"  src={"https://s3.amazonaws.com/media-cajewelers.com/SapphireRing-resized.jpg"} alt="Classic Ring"></img></a>
                        <div class="mt-10"><a href="#"> SHOP DIAMOND NECKLACES </a></div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3 col-l-3 p-1">
                        <div class="text-center">
                        <a href="#"><img src={"https://s3.amazonaws.com/media-cajewelers.com/SapphireRing-resized.jpg"} alt="Ruby Tourmaline Ring"></img></a>
                        <div class="mt-10"><a href="#"> SHOP GEMSTONE RINGS </a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default PopularProducts;