import React from 'react';

const HeaderNavbar2 = () => {
    return ( 
        <div id="header-nav2" class="hide container">
            <nav class="navbar navbar-expand-md navbar-dark">
            <a id="header-log" class="center" href="/"><img src={require("../../images/logo2.png")} alt="logo" height="45px" width="125px"></img></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav m-auto">
      <li class="nav-item dropdown">
        <a href="/engagement-rings/all-rings" class="nav-link dropdown-toggle nav-link-spacing" id="navbarDropdown" aria-haspopup="true" aria-expanded="false">
          ENGAGEMENT
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">

            <div class="row w-60 ml-auto">
              <div class="col-md-3">
                <span class="text-uppercase">shop by style</span>
                <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link nav-link-align" href="/engagement-rings/solitaire-rings"> Solitaire </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-link-align" href="/engagement-rings/halo-rings"> Halo </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-link-align" href="/engagement-rings/three-stone-rings"> Three Stone </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-link-align" href="/engagement-rings/vintage-rings"> Vintage </a>
                </li>
              </ul>
              </div>
   
              <div class="col-md-3">
                <span class="text-uppercase">shop by shape</span>
                <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link nav-link-align" href="#">Round</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-link-align" href="#">Oval</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-link-align" href="#">Princess Cut</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-link-align" href="#">Radiant Cut</a>
                </li>
              </ul>
              </div>
 
              <div class="col-md-6 text-center">
                <a href="">
                  <img src={require("../../images/BridalSetPrincess1.jpg")} alt="engagement-thumbnail" width="300px" height="200px" ></img>
                </a>              </div>
          </div>
 
        </div>
      </li>
      
      <li class="nav-item dropdown">
        <a href="/wedding/womens-wedding-rings" class="nav-link dropdown-toggle nav-link-spacing" id="navbarDropdown" aria-haspopup="true" aria-expanded="false">
          WEDDING
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">

            <div class="row w-60 ml-auto">
              <div class="col-md-3">
                <span class="text-uppercase">women</span>
                <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link nav-link-align" href="/wedding/womens-wedding-rings"> Women's Wedding Rings </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-link-align" href="/engagement-rings/halo-rings"> Anniversary Rings </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-link-align" href="/engagement-rings/three-stone-rings"> Diamond Rings </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-link-align" href="/engagement-rings/vintage-rings"> Top 10 Choices </a>
                </li>
              </ul>
              </div>
   
              <div class="col-md-3">
                <span class="text-uppercase">Men</span>
                <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link nav-link-align" href="/wedding/mens-wedding-rings">Men's Wedding Rings</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-link-align" href="#">Diamond Rings</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-link-align" href="#">Carved Rings</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-link-align" href="/engagement-rings/vintage-rings"> Top 10 Choices </a>
                </li>
              </ul>
              </div>
 
              <div class="col-md-6 text-center">
                <a href="">
                  <img src={require("../../images/wedding-thumbnail.jpeg")} alt="engagement-thumbnail" width="300px" height="200px" ></img>
                </a>              </div>
          </div>
 
        </div>
      </li>
      
      <li class="nav-item dropdown">
        <a href="/jewelry" class="nav-link dropdown-toggle nav-link-spacing" id="navbarDropdown" aria-haspopup="true" aria-expanded="false">
          JEWELRY
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">

            <div class="row w-60 ml-auto">
              <div class="col-md-3">
                <span class="text-uppercase">Category</span>
                <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link nav-link-align" href="/jewelry/rings"> Rings </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-link-align" href="/jewelry/necklaces"> Necklaces </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-link-align" href="/jewelry/earrings"> Earrings </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-link-align" href="/jewelry/bracelets"> Bracelets </a>
                </li>
              </ul>
              </div>
   
              <div class="col-md-3">
                <span class="text-uppercase">gifts</span>
                <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link nav-link-align" href="#">Browse Gifts</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-link-align" href="#">Gifts under $300</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-link-align" href="#">Anniversary Gifts</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-link-align" href="#">Top 10 Gifts</a>
                </li>
              </ul>
              </div>
 
              <div class="col-md-6 text-center">
                <a href="">
                  <img src={require("../../images/Settings.jpg")} alt="engagement-thumbnail" width="300px" height="200px" ></img>
                </a>              </div>
          </div>
 
        </div>
      </li>
      

      <li class="nav-item">
        <a class="nav-link nav-link-spacing" href="/about" >ABOUT</a>
      </li>
      <li class="nav-item">
        <a class="nav-link nav-link-spacing" href="/contact" >CONTACT</a>
      </li>
      <li class="nav-item">
        <a class="nav-link nav-link-spacing" href="/education" >EDUCATION</a>
      </li>
    </ul>
    <div id="header-icons">
      <i class="fas fa-search"></i>
      <i class="fas fa-address-book"></i>
      <i class="fas fa-shopping-bag"></i>
    </div>
    {/* <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
    </form> */}
  </div>

</nav>

          </div>

     );
}
 
export default HeaderNavbar2;