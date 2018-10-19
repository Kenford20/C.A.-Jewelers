import React from 'react';
import Subscribe from './footer-components/subscribe';
import Connect from './footer-components/connect';
// import FooterInfo from './footer-components/footer-info';
import MobileFooter from './footer-components/mobile-footer';
import '../styles/footer.css';


const GlobalFooter = () => {
    return (
        <div id="global-footer" class="footer-bg">
            <MobileFooter/>
            <div class="container" id="footer-info">
                <div class="row" id="footer-info">
                        <div class="col-sm-6 col-md-3 col-lg-2">
                            <h6 class="footer-links yellow"> <strong> The C.A. Team</strong> </h6>
                            <a href="#" class="footer-links">About</a> <br></br>
                            <a href="#" class="footer-links">Designers</a> <br></br>
                            <a href="#" class="footer-links">Sales</a>
                        </div>
                        <div class="col-sm-6 col-md-3 col-lg-2">
                            <h6 class="footer-links yellow"> <strong> Policies </strong></h6>
                            <a href="#" class="footer-links">Privacy</a> <br></br>
                            <a href="#" class="footer-links">Terms of Use</a> <br></br>
                            <a href="#" class="footer-links">Security</a>
                        </div>
         
                        <div class="col-sm-6 col-md-3 col-lg-2">
                            <h6 class="footer-links yellow"> <strong> Customer Service </strong> </h6>
                            <a href="#" class="footer-links">Contact</a> <br></br>
                            <a href="#" class="footer-links">Financial Options</a> <br></br>
                            <a href="#" class="footer-links">Shipping</a> <br></br>
                            <a href="#" class="footer-links">Free 30 Day Returns</a> <br></br>
                            <a href="#" class="footer-links">Resizing Guide</a> <br></br>
                        </div>
                        <div class="col-sm-6 col-md-3 col-lg-2">
                            <h6 class="footer-links yellow"> <strong> Locate Us </strong> </h6>
                            <a href="#" class="footer-links"> Map </a> <br></br>
                            <a href="#" class="footer-links">9 S Wabash Ave, Chicago, IL 60603</a>
                        </div>
                        <div class="col-lg-4">
                            <Connect/>
                            <Subscribe/>
                        </div>
                </div>

                {/* <div class="container" id="store-hours">
                    <p> <strong> Hours: </strong>
                    Monday - Friday: 10:30am - 6:00pm
                    Saturday: 10:30am - 5:00pm <br></br>
                    Sunday: Closed </p>
                </div> */}

                {/* <a class="center" href="#" id="footer-logo"><img src={require("../images/logo2.png")} height="55px" width="185px"></img></a> */}
            </div>



            <div id="footer">
                <h6 class="text-center"> C.A. Jewelers Inc. © 2018 | Privacy Policy | Terms & Conditions </h6>
            </div>

        </div>
     );
}
 
export default GlobalFooter;