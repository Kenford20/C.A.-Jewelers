import React from 'react';

const MobileFooter = () => {
    return ( 
        <div id="mobile-footer">
            <a href="#ca-team" className="list-group-item list-group-item-success" data-toggle="collapse" data-parent="#ca-team">
                The C.A. Team <div className="chevron-container"><i className="fa fa-chevron-down chevron-small"></i></div></a>
                    <div className="collapse" id="ca-team">
                        <a href="#SubMenu1" className="list-group-item no-border footer-sublinks" data-toggle="collapse" data-parent="#SubMenu1">About<i className="fa fa-caret-down"></i></a>
                        <a href="javascript:;" className="list-group-item no-border footer-sublinks">Designers</a>
                        <a href="javascript:;" className="list-group-item no-border footer-sublinks">Sales</a>
                    </div>
                <a href="#customer-service" className="list-group-item list-group-item-success" data-toggle="collapse" data-parent="#customer-service">
                Customer Service <div className="chevron-container"><i className="fa fa-chevron-down chevron-small"></i></div></a>
                    <div className="collapse" id="customer-service">
                        <a href="" className="list-group-item no-border footer-sublinks">Contact</a>
                        <a href="" className="list-group-item no-border footer-sublinks">Financing Options</a>
                        <a href="" className="list-group-item no-border footer-sublinks">Free Shipping</a>
                        <a href="" className="list-group-item no-border footer-sublinks">Free 30 Day Returns</a>
                        <a href="" className="list-group-item no-border footer-sublinks">Resizing Guide</a>
                    </div>
                <a href="#policies" className="list-group-item list-group-item-success" data-toggle="collapse" data-parent="#policies">
                Policies <div className="chevron-container"><i className="fa fa-chevron-down chevron-small"></i></div></a>
                    <div className="collapse" id="policies">
                        <a href="" className="list-group-item no-border footer-sublinks">Privacy</a>
                        <a href="" className="list-group-item no-border footer-sublinks">Terms of Use</a>
                        <a href="" className="list-group-item no-border footer-sublinks">Security</a>
                    </div>
                <a href="#contact-footer" className="list-group-item list-group-item-success" data-toggle="collapse" data-parent="#contact-footer">
                Contact Us <div className="chevron-container"><i className="fa fa-chevron-down chevron-small"></i></div></a>
                    <div className="collapse" id="contact-footer">
                        <a href="" className="list-group-item no-border footer-sublinks">312-123-4567</a>
                        <a href="" className="list-group-item no-border footer-sublinks">Email Us</a>
                        <a href="" className="list-group-item no-border footer-sublinks">Map</a>
                        <a href="" className="list-group-item no-border footer-sublinks">FAQs</a>
                    </div>
        </div>
     );
}
 
export default MobileFooter;