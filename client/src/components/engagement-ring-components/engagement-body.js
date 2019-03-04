import React from 'react';

import '../../styles/engagement-ring-styles/engagement-body.css';

const EngagementBody = () => {
    return ( 
        <div id="engagement-rings-body" className="container">
            <div id="halo-body">
                <a href="/engagement-rings/halo-rings"><img src={require("../../images/engagement-rings/halo.jpeg")} alt="halo ring"></img></a>
                <div id="halo-description"> 
                    <div>
                        <h2>Halo Engagement Rings</h2>
                        <p>Adipisicing ipsum nulla cupidatat do anim pariatur non adipisicing veniam nisi. Pariatur minim quis et sint commodo. Ut cupidatat dolore enim quis mollit est sit mollit mollit culpa cillum.</p>
                        <a href="/engagement-rings/halo-rings">Shop Halo Rings</a>
                    </div>
                </div>
            </div>
            <div id="three-stone-body">
                <a href="/engagement-rings/three-stone-rings"><img src={require("../../images/engagement-rings/three-stone.jpeg")} alt="three stone ring"></img></a>
                <div id="three-stone-description"> 
                    <div>
                        <h2>Three Stone Engagement Rings</h2>
                        <p>Magna eiusmod sunt aliqua nulla labore quis cillum minim cillum ullamco ullamco. Esse ad et minim magna pariatur commodo ea amet quis labore duis consectetur.</p>
                        <a href="/engagement-rings/three-stone-rings">Shop Three Stone Rings</a>
                    </div>
                </div>
            </div>
            <div id="vintage-body">
                <a href="/engagement-rings/vintage-rings"><img src={require("../../images/engagement-rings/vintage.jpeg")} alt="vintage ring"></img></a>
                <div id="vintage-description"> 
                    <div>
                        <h2>Vintage Engagement Rings</h2>
                        <p>Id do officia deserunt velit nulla cupidatat sint nulla eu cillum. Non quis dolore velit ut velit officia magna reprehenderit.</p>
                        <a href="/engagement-rings/vintage-rings">Shop Vintage Rings</a>
                    </div>
                </div>
            </div>
            <div id="solitaire-body">
                <div id="solitaire-description"> 
                    <div>
                        <h2>Solitaire Engagement Rings</h2>
                        <p>Ea non velit quis ipsum et cillum Lorem anim laborum do. Labore eiusmod do consectetur cupidatat amet commodo sit et do eu magna. Id elit ex sit eiusmod minim est incididunt laborum.</p>
                        <a href="/engagement-rings/solitaire-rings">Shop Solitaire Rings</a>
                    </div>
                </div>
                <a href="/engagement-rings/solitaire-rings"><img src={require("../../images/engagement-rings/solitaire.jpeg")} alt="solitaire ring"></img></a>
            </div>
        </div>
     );
}
 
export default EngagementBody;