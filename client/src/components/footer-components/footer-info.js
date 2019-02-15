import React from 'react';

const FooterInfo = () => {
    return ( 
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
            </div>
        </div>
     );
}
 
export default FooterInfo;