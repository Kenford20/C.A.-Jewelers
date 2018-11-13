import React from 'react';
import '../../styles/jewelry-styles/cheap-products.css';

const CheapProducts = () => {
    return ( 
        <div id="cheap-products">
            <h3 class="body-subtitles text-center">GIFTS UNDER $300</h3>
            <div id="popular-images">
                <div class="row container m-auto">
            
                    <div class="col-sm-6 col-md-3 col-l-3 p-1">
                        <div class="text-center">
                        <a href="#"><img src={"https://s3.amazonaws.com/media-cajewelers.com/JadeRing.jpg"} alt="Jade Ring"></img></a>
                        <div class="mt-10"><a href="#"> SHOP HALO RINGS </a></div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3 col-l-3 p-1">
                        <div class="text-center">
                        <a href="#"><img src={"https://s3.amazonaws.com/media-cajewelers.com/RoseCutBand.jpg"} alt="Rose Cut Band"></img></a>
                        <div class="mt-10"><a href="#" > SHOP CRISSCROSS BANDS </a></div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3 col-l-3 p-1">
                        <div class="text-center">
                        <a href="#"><img id="product2"  src={"https://s3.amazonaws.com/media-cajewelers.com/Necklace.jpg"} alt="Diamond Necklace"></img></a>
                        <div class="mt-10"><a href="#"> SHOP DIAMOND NECKLACES </a></div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3 col-l-3 p-1">
                        <div class="text-center">
                        <a href="#"><img src={"https://s3.amazonaws.com/media-cajewelers.com/Wide3row.jpg"} alt="Wide Ring"></img></a>
                        <div class="mt-10"><a href="#"> SHOP VINTAGE RINGS </a></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default CheapProducts;