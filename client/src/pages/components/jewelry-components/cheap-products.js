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
                        <a href="#"><img src={require("../../images/cheap/JadeRing.jpg")} alt="Jade Ring"></img></a>
                        <div class="mt-10"><a href="#"> SHOP HALO RINGS </a></div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3 col-l-3 p-1">
                        <div class="text-center">
                        <a href="#"><img src={require("../../images/cheap/RoseCutBand.jpg")} alt="Rose Cut Band"></img></a>
                        <div class="mt-10"><a href="#" > SHOP CRISSCROSS BANDS </a></div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3 col-l-3 p-1">
                        <div class="text-center">
                        <a href="#"><img id="product2"  src={require("../../images/cheap/Necklace.jpg")} alt="Diamond Necklace"></img></a>
                        <div class="mt-10"><a href="#"> SHOP DIAMOND NECKLACES </a></div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3 col-l-3 p-1">
                        <div class="text-center">
                        <a href="#"><img src={require("../../images/cheap/Wide3row.jpg")} alt="Wide Ring"></img></a>
                        <div class="mt-10"><a href="#"> SHOP VINTAGE RINGS </a></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default CheapProducts;