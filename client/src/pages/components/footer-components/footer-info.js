import React from 'react';

const FooterInfo = () => {
    return ( 
        <div>
            <div class="container text-center" id="footer-info">
                <div class="row" id="footer-info-row1">
                    <div class="m-auto">
                        <div class="col-sm-6 col-lg-3">
                            <h6 class="yellow"> <strong> The C.A. Team</strong> </h6>
                            <a href="#" class="footer-links">About</a> <br></br>
                            <a href="#" class="footer-links">Designers</a> <br></br>
                            <a href="#" class="footer-links">Sales</a>
                        </div>
                        <div class="col-sm-6 col-lg-3">
                            <h6 class="yellow"> <strong> Policies </strong></h6>
                            <a href="#" class="footer-links">Privacy</a> <br></br>
                            <a href="#" class="footer-links">Terms of Use</a> <br></br>
                            <a href="#" class="footer-links">Security</a>
                        </div>
         
                        <div class="col-sm-6 col-lg-3">
                            <h6 class="yellow"> <strong> Customer Service </strong> </h6>
                            <a href="#" class="footer-links">Contact</a> <br></br>
                            <a href="#" class="footer-links">Financial Options</a> <br></br>
                            <a href="#" class="footer-links">Shipping</a>
                        </div>
                        <div class="col-sm-6 col-lg-3">
                            <h6 class="yellow"> <strong> Locate Us </strong> </h6>
                            <a href="#" class="footer-links"> Map </a> <br></br>
                            <a href="#" class="footer-links">9 S Wabash Ave, Chicago, IL 60603</a>
                        </div>
        
                    </div>
                </div>

                <div class="container" id="store-hours">
                    <p> <strong> Hours: </strong>
                    Monday - Friday: 10:30am - 6:00pm
                    Saturday: 10:30am - 5:00pm <br></br>
                    Sunday: Closed </p>
                </div>

                <a class="center" href="#" id="footer-logo"><img src={require("../../images/logo2.png")} height="55px" width="185px"></img></a>
            </div>
        </div>
     );
}
 
export default FooterInfo;