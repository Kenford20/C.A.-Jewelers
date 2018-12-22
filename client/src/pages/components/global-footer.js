import React from 'react';
import Connect from './footer-components/connect';
// import FooterInfo from './footer-components/footer-info';
import MobileFooter from './footer-components/mobile-footer';
import Email from './footer-components/email';
import '../styles/footer.css';


const GlobalFooter = () => {
    return (
        <div id="global-footer" className="footer-bg">
            <Email />
            <MobileFooter/>
            <div className="global-footer-container">
                <div className="row" id="footer-info">
                    <div className="col-sm-6 col-md-3 col-lg-3">
                        <h6 className="footer-links yellow"> <strong> The C.A. Team</strong> </h6>
                        <a href="#" className="footer-links">About</a> <br></br>
                        <a href="#" className="footer-links">Designers</a> <br></br>
                        <a href="#" className="footer-links">Sales</a>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3">
                        <h6 className="footer-links yellow"> <strong> Policies </strong></h6>
                        <a href="#" className="footer-links">Privacy</a> <br></br>
                        <a href="#" className="footer-links">Terms of Use</a> <br></br>
                        <a href="#" className="footer-links">Security</a>
                    </div>
        
                    <div className="col-sm-6 col-md-3 col-lg-3">
                        <h6 className="footer-links yellow"> <strong> Customer Service </strong> </h6>
                        <a href="#" className="footer-links">Contact</a> <br></br>
                        <a href="#" className="footer-links">Financial Options</a> <br></br>
                        <a href="#" className="footer-links">Shipping</a> <br></br>
                        <a href="#" className="footer-links">Free 30 Day Returns</a> <br></br>
                        <a href="#" className="footer-links">Resizing Guide</a> <br></br>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3">
                        <h6 className="footer-links yellow"> <strong> Locate Us </strong> </h6>
                        <a href="#" className="footer-links"> Map </a> <br></br>
                        <a href="#" className="footer-links">9 S Wabash Ave, Chicago, IL 60603</a>
                    </div>
                    <div className="col-lg-4">
                        {/* <Connect/> */}
                    </div>
                </div>

                {/* <a className="center" href="#" id="footer-logo"><img src={require("../images/logo2.png")} height="55px" width="185px"></img></a> */}
            </div>

            <div id="footer-container">
                <div id="footer"> <h6 className="text-center">C.A. Jewelers Inc. © 2018 <span>|</span>Privacy Policy<span>|</span>Terms & Conditions<span>|</span>Site Map</h6> </div>
                <div id='socials' className="col-12 social padding">
                    <div id="socials-container">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-youtube"></i></a>
                        <a href="#"><i className="fab fa-twitch"></i></a>
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default GlobalFooter;