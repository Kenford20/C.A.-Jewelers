import React from 'react';

const HeaderNavbar = ({ onToggle, numItemsInBag }) => {
    return ( 
        <div id="header-nav" className="hide-md">
            <nav className="navbar navbar-expand-md navbar-light sticky-top">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                        <span className="navbar-toggler-icon"></span>
                    </button>  
                    <a id="header-logo" href="/"><img src={require("../../images/logo2.png")} alt="logo" height="55px" width="185px"></img></a>  
                    <a id="search-btn" href="" onClick={ onToggle }><i className="fas fa-search"></i></a>
                </div>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav">

                        <li className="nav-item"><a  className="nav-link navbar-toggler dropdown-toggler" data-toggle="collapse" data-target="#engagement-rings">ENGAGEMENT RINGS <div className="chevron-container"><i className="fa fa-chevron-down chevron-small"></i></div></a>
                            <div className="collapse navbar-collapse" id="engagement-rings">
                                <ul className="navbar-nav">
                                    <li className="nav-item dropdown-item-bg"><a className="nav-link navbar-collapse-dropdown-item" href="./engagement-rings">Browse Engagement Rings</a></li>
                                    <li className="nav-item dropdown-item-bg"><a className="nav-link navbar-collapse-dropdown-item" href="./engagement-rings/solitaire-rings">Solitaire</a></li>
                                    <li className="nav-item dropdown-item-bg"><a className="nav-link navbar-collapse-dropdown-item" href="./engagement-rings/halo-rings">Halo</a></li>
                                    <li className="nav-item dropdown-item-bg"><a className="nav-link navbar-collapse-dropdown-item" href="./engagement-rings/three-stone-rings">Three Stone</a></li>
                                    <li className="nav-item dropdown-item-bg"><a className="nav-link navbar-collapse-dropdown-item" href="./engagement-rings/vintage-rings">Vintage</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item"><a className="nav-link navbar-toggler dropdown-toggler" data-toggle="collapse" data-target="#wedding-bands">WEDDING BANDS <div className="chevron-container"><i className="fa fa-chevron-down chevron-small"></i></div></a>
                            <div className="collapse navbar-collapse" id="wedding-bands">
                                <ul className="navbar-nav">
                                <li className="nav-item dropdown-item-bg"><a className="nav-link navbar-collapse-dropdown-item" href="./wedding-bands">Browse Wedding Bands</a></li>
                                    <li className="nav-item dropdown-item-bg" ><a className="nav-link navbar-collapse-dropdown-item" href="./wedding/mens-wedding-rings">Mens</a></li>
                                    <li className="nav-item dropdown-item-bg" ><a className="nav-link navbar-collapse-dropdown-item" href="./wedding/womens-wedding-rings">Womens</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item"><a className="nav-link navbar-toggler dropdown-toggler" data-toggle="collapse" data-target="#pearls">PEARLS <div className="chevron-container"><i className="fa fa-chevron-down chevron-small"></i></div></a>
                            <div className="collapse navbar-collapse" id="pearls">
                                <ul className="navbar-nav">
                                <li className="nav-item dropdown-item-bg"><a className="nav-link navbar-collapse-dropdown-item" href="./catalog">Browse Pearls</a></li>
                                    <li className="nav-item dropdown-item-bg" ><a className="nav-link navbar-collapse-dropdown-item" href="./catalog">Freshwater</a></li>
                                    <li className="nav-item dropdown-item-bg" ><a className="nav-link navbar-collapse-dropdown-item" href="./catalog">Cultured</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item"><a className="nav-link navbar-toggler dropdown-toggler" data-toggle="collapse" data-target="#jewelry">JEWELRY <div className="chevron-container"><i className="fa fa-chevron-down chevron-small"></i></div></a>
                            <div className="collapse navbar-collapse" id="jewelry">
                                <ul className="navbar-nav">
                                <li className="nav-item dropdown-item-bg"><a className="nav-link navbar-collapse-dropdown-item" href="./jewelry">Browse Jewelry</a></li>
                                    <li className="nav-item navbar-collapse-dropdown-item2" ><a className="nav-link navbar-toggler dropdown-toggler" data-toggle="collapse" data-target="#necklaces">Necklaces <div className="chevron-container"><i className="fa fa-chevron-down chevron-small"></i></div></a>
                                        <div className="collapse navbar-collapse" id="necklaces">
                                            <ul className="navbar-nav">
                                                <li className="nav-item dropdown-item-bg" ><a className="nav-link navbar-collapse-dropdown-item" href="./catalog">Diamonds</a></li>
                                                <li className="nav-item dropdown-item-bg" ><a className="nav-link navbar-collapse-dropdown-item" href="./catalog">Sapphires</a></li>
                                                <li className="nav-item dropdown-item-bg" ><a className="nav-link navbar-collapse-dropdown-item" href="./catalog">Rubies</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="nav-item navbar-collapse-dropdown-item2" ><a className="nav-link navbar-toggler dropdown-toggler" data-toggle="collapse" data-target="#earrings">Earrings <div className="chevron-container"><i className="fa fa-chevron-down chevron-small"></i></div></a>
                                        <div className="collapse navbar-collapse" id="earrings">
                                            <ul className="navbar-nav">
                                                <li className="nav-item dropdown-item-bg" ><a className="nav-link navbar-collapse-dropdown-item" href="./catalog">Hoops</a></li>
                                                <li className="nav-item dropdown-item-bg" ><a className="nav-link navbar-collapse-dropdown-item" href="./catalog">Studs</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="nav-item navbar-collapse-dropdown-item2" ><a className="nav-link navbar-toggler dropdown-toggler" data-toggle="collapse" data-target="#bracelets">Bracelets <div className="chevron-container"><i className="fa fa-chevron-down chevron-small"></i></div></a>
                                        <div className="collapse navbar-collapse" id="bracelets">
                                            <ul className="navbar-nav">
                                                <li className="nav-item dropdown-item-bg" ><a className="nav-link navbar-collapse-dropdown-item" href="./catalog">Diamonds</a></li>
                                                <li className="nav-item dropdown-item-bg" ><a className="nav-link navbar-collapse-dropdown-item" href="./catalog">Colored Stones</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item"><a className="nav-link" href="./about">ABOUT</a></li>
                        <li className="nav-item"><a className="nav-link" href="./education">EDUCATION</a></li>
                        <li className="nav-item"><a className="nav-link" href="./contact">CONTACT US</a></li>       
                    </ul>
                </div>
            </nav>  
        </div>
     );
}
 
export default HeaderNavbar;