import React from 'react';

const FooterInfo = () => {
    return ( 
        <div>
            <div className="container text-center" id="footer-info">
                <div className="row" id="footer-info-row1">
                    <div className="m-auto">
                        <div className="col-sm-6 col-lg-3">
                            <h6 className="yellow"> <strong> The C.A. Team</strong> </h6>
                            <a href="#" className="footer-links">About</a> <br></br>
                            <a href="#" className="footer-links">Designers</a> <br></br>
                            <a href="#" className="footer-links">Sales</a>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <h6 className="yellow"> <strong> Policies </strong></h6>
                            <a href="#" className="footer-links">Privacy</a> <br></br>
                            <a href="#" className="footer-links">Terms of Use</a> <br></br>
                            <a href="#" className="footer-links">Security</a>
                        </div>
         
                        <div className="col-sm-6 col-lg-3">
                            <h6 className="yellow"> <strong> Customer Service </strong> </h6>
                            <a href="#" className="footer-links">Contact</a> <br></br>
                            <a href="#" className="footer-links">Financial Options</a> <br></br>
                            <a href="#" className="footer-links">Shipping</a>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <h6 className="yellow"> <strong> Locate Us </strong> </h6>
                            <a href="#" className="footer-links"> Map </a> <br></br>
                            <a href="#" className="footer-links">9 S Wabash Ave, Chicago, IL 60603</a>
                        </div>
        
                    </div>
                </div>

                <div className="container" id="store-hours">
                    <p> <strong> Hours: </strong>
                    Monday - Friday: 10:30am - 6:00pm
                    Saturday: 10:30am - 5:00pm <br></br>
                    Sunday: Closed </p>
                </div>

                <a className="center" href="#" id="footer-logo"><img src={require("../../images/logo2.png")} height="55px" width="185px"></img></a>
            </div>
        </div>
     );
}
 
export default FooterInfo;