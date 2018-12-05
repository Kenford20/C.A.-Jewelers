import React from 'react';
import Subscribe from './footer-components/subscribe';
import Connect from './footer-components/connect';
// import FooterInfo from './footer-components/footer-info';
import MobileFooter from './footer-components/mobile-footer';
import '../styles/footer.css';


const GlobalFooter = () => {
    return (
        <div id="global-footer" className="footer-bg">
            <MobileFooter/>
            <div className="container" id="footer-info">
                <div className="row" id="footer-info">
                        <div className="col-sm-6 col-md-3 col-lg-2">
                            <h6 className="footer-links yellow"> <strong> The C.A. Team</strong> </h6>
                            <a href="#" className="footer-links">About</a> <br></br>
                            <a href="#" className="footer-links">Designers</a> <br></br>
                            <a href="#" className="footer-links">Sales</a>
                        </div>
                        <div className="col-sm-6 col-md-3 col-lg-2">
                            <h6 className="footer-links yellow"> <strong> Policies </strong></h6>
                            <a href="#" className="footer-links">Privacy</a> <br></br>
                            <a href="#" className="footer-links">Terms of Use</a> <br></br>
                            <a href="#" className="footer-links">Security</a>
                        </div>
         
                        <div className="col-sm-6 col-md-3 col-lg-2">
                            <h6 className="footer-links yellow"> <strong> Customer Service </strong> </h6>
                            <a href="#" className="footer-links">Contact</a> <br></br>
                            <a href="#" className="footer-links">Financial Options</a> <br></br>
                            <a href="#" className="footer-links">Shipping</a> <br></br>
                            <a href="#" className="footer-links">Free 30 Day Returns</a> <br></br>
                            <a href="#" className="footer-links">Resizing Guide</a> <br></br>
                        </div>
                        <div className="col-sm-6 col-md-3 col-lg-2">
                            <h6 className="footer-links yellow"> <strong> Locate Us </strong> </h6>
                            <a href="#" className="footer-links"> Map </a> <br></br>
                            <a href="#" className="footer-links">9 S Wabash Ave, Chicago, IL 60603</a>
                        </div>
                        <div className="col-lg-4">
                            <Connect/>
                            <Subscribe/>
                        </div>
                </div>

                {/* <div className="container" id="store-hours">
                    <p> <strong> Hours: </strong>
                    Monday - Friday: 10:30am - 6:00pm
                    Saturday: 10:30am - 5:00pm <br></br>
                    Sunday: Closed </p>
                </div> */}

                {/* <a className="center" href="#" id="footer-logo"><img src={require("../images/logo2.png")} height="55px" width="185px"></img></a> */}
            </div>



            <div id="footer">
                <h6 className="text-center"> C.A. Jewelers Inc. © 2018 | Privacy Policy | Terms & Conditions </h6>
            </div>

        </div>
     );
}
 
export default GlobalFooter;