import React from 'react';

const HeaderNavbar = ({onToggle}) => {
    return ( 
        <div id="header-nav" class="hide-md">
            <nav class="navbar navbar-expand-md navbar-light sticky-top">
                <div class="container-fluid">
                    <div class="social">
                    <a id="search-btn" href="" onClick={onToggle}><i class="fas fa-search"></i></a>
                    </div>
                    <a id="header-log" class="center" href="/"><img src={require("../../images/logo2.png")} alt="logo" height="55px" width="185px"></img></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                        <span class="navbar-toggler-icon"></span>
                    </button>  
                </div>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav">

                        <li class="nav-item"><a  class="nav-link navbar-toggler dropdown-toggler" data-toggle="collapse" data-target="#engagement-rings">ENGAGEMENT RINGS <div class="chevron-container"><i class="fa fa-chevron-down chevron-small"></i></div></a>
                            <div class="collapse navbar-collapse" id="engagement-rings">
                                <ul class="navbar-nav">
                                    <li class="nav-item dropdown-item-bg"><a class="nav-link navbar-collapse-dropdown-item" href="./engagement-rings">Browse Engagement Rings</a></li>
                                    <li class="nav-item dropdown-item-bg"><a class="nav-link navbar-collapse-dropdown-item" href="./engagement-rings/solitaire-rings">Solitaire</a></li>
                                    <li class="nav-item dropdown-item-bg"><a class="nav-link navbar-collapse-dropdown-item" href="./engagement-rings/halo-rings">Halo</a></li>
                                    <li class="nav-item dropdown-item-bg"><a class="nav-link navbar-collapse-dropdown-item" href="./engagement-rings/three-stone-rings">Three Stone</a></li>
                                    <li class="nav-item dropdown-item-bg"><a class="nav-link navbar-collapse-dropdown-item" href="./engagement-rings/vintage-rings">Vintage</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="nav-item"><a class="nav-link navbar-toggler dropdown-toggler" data-toggle="collapse" data-target="#wedding-bands">WEDDING BANDS <div class="chevron-container"><i class="fa fa-chevron-down chevron-small"></i></div></a>
                            <div class="collapse navbar-collapse" id="wedding-bands">
                                <ul class="navbar-nav">
                                <li class="nav-item dropdown-item-bg"><a class="nav-link navbar-collapse-dropdown-item" href="./wedding-bands">Browse Wedding Bands</a></li>
                                    <li class="nav-item dropdown-item-bg" ><a class="nav-link navbar-collapse-dropdown-item" href="./wedding/mens-wedding-rings">Mens</a></li>
                                    <li class="nav-item dropdown-item-bg" ><a class="nav-link navbar-collapse-dropdown-item" href="./wedding/womens-wedding-rings">Womens</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="nav-item"><a class="nav-link navbar-toggler dropdown-toggler" data-toggle="collapse" data-target="#pearls">PEARLS <div class="chevron-container"><i class="fa fa-chevron-down chevron-small"></i></div></a>
                            <div class="collapse navbar-collapse" id="pearls">
                                <ul class="navbar-nav">
                                <li class="nav-item dropdown-item-bg"><a class="nav-link navbar-collapse-dropdown-item" href="./catalog">Browse Pearls</a></li>
                                    <li class="nav-item dropdown-item-bg" ><a class="nav-link navbar-collapse-dropdown-item" href="./catalog">Freshwater</a></li>
                                    <li class="nav-item dropdown-item-bg" ><a class="nav-link navbar-collapse-dropdown-item" href="./catalog">Cultured</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="nav-item"><a class="nav-link navbar-toggler dropdown-toggler" data-toggle="collapse" data-target="#jewelry">JEWELRY <div class="chevron-container"><i class="fa fa-chevron-down chevron-small"></i></div></a>
                            <div class="collapse navbar-collapse" id="jewelry">
                                <ul class="navbar-nav">
                                <li class="nav-item dropdown-item-bg"><a class="nav-link navbar-collapse-dropdown-item" href="./jewelry">Browse Jewelry</a></li>
                                    <li class="nav-item navbar-collapse-dropdown-item2" ><a class="nav-link navbar-toggler dropdown-toggler" data-toggle="collapse" data-target="#necklaces">Necklaces <div class="chevron-container"><i class="fa fa-chevron-down chevron-small"></i></div></a>
                                        <div class="collapse navbar-collapse" id="necklaces">
                                            <ul class="navbar-nav">
                                                <li class="nav-item dropdown-item-bg" ><a class="nav-link navbar-collapse-dropdown-item" href="./catalog">Diamonds</a></li>
                                                <li class="nav-item dropdown-item-bg" ><a class="nav-link navbar-collapse-dropdown-item" href="./catalog">Sapphires</a></li>
                                                <li class="nav-item dropdown-item-bg" ><a class="nav-link navbar-collapse-dropdown-item" href="./catalog">Rubies</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="nav-item navbar-collapse-dropdown-item2" ><a class="nav-link navbar-toggler dropdown-toggler" data-toggle="collapse" data-target="#earrings">Earrings <div class="chevron-container"><i class="fa fa-chevron-down chevron-small"></i></div></a>
                                        <div class="collapse navbar-collapse" id="earrings">
                                            <ul class="navbar-nav">
                                                <li class="nav-item dropdown-item-bg" ><a class="nav-link navbar-collapse-dropdown-item" href="./catalog">Hoops</a></li>
                                                <li class="nav-item dropdown-item-bg" ><a class="nav-link navbar-collapse-dropdown-item" href="./catalog">Studs</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="nav-item navbar-collapse-dropdown-item2" ><a class="nav-link navbar-toggler dropdown-toggler" data-toggle="collapse" data-target="#bracelets">Bracelets <div class="chevron-container"><i class="fa fa-chevron-down chevron-small"></i></div></a>
                                        <div class="collapse navbar-collapse" id="bracelets">
                                            <ul class="navbar-nav">
                                                <li class="nav-item dropdown-item-bg" ><a class="nav-link navbar-collapse-dropdown-item" href="./catalog">Diamonds</a></li>
                                                <li class="nav-item dropdown-item-bg" ><a class="nav-link navbar-collapse-dropdown-item" href="./catalog">Colored Stones</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="nav-item"><a class="nav-link" href="./about">ABOUT</a></li>
                        <li class="nav-item"><a class="nav-link" href="./education">EDUCATION</a></li>
                        <li class="nav-item"><a class="nav-link" href="./contact">CONTACT US</a></li>       
                    </ul>
                </div>
            </nav>  
        </div>
     );
}
 
export default HeaderNavbar;