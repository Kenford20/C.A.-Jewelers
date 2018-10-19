import React from 'react';

const MobileFooter = () => {
    return ( 
        <div id="mobile-footer">
            <a href="#ca-team" class="list-group-item list-group-item-success" data-toggle="collapse" data-parent="#ca-team">
                The C.A. Team <div class="chevron-container"><i class="fa fa-chevron-down chevron-small"></i></div></a>
                    <div class="collapse" id="ca-team">
                        <a href="#SubMenu1" class="list-group-item no-border footer-sublinks" data-toggle="collapse" data-parent="#SubMenu1">About<i class="fa fa-caret-down"></i></a>
                        <a href="javascript:;" class="list-group-item no-border footer-sublinks">Designers</a>
                        <a href="javascript:;" class="list-group-item no-border footer-sublinks">Sales</a>
                    </div>
                <a href="#customer-service" class="list-group-item list-group-item-success" data-toggle="collapse" data-parent="#customer-service">
                Customer Service <div class="chevron-container"><i class="fa fa-chevron-down chevron-small"></i></div></a>
                    <div class="collapse" id="customer-service">
                        <a href="" class="list-group-item no-border footer-sublinks">Contact</a>
                        <a href="" class="list-group-item no-border footer-sublinks">Financing Options</a>
                        <a href="" class="list-group-item no-border footer-sublinks">Free Shipping</a>
                        <a href="" class="list-group-item no-border footer-sublinks">Free 30 Day Returns</a>
                        <a href="" class="list-group-item no-border footer-sublinks">Resizing Guide</a>
                    </div>
                <a href="#policies" class="list-group-item list-group-item-success" data-toggle="collapse" data-parent="#policies">
                Policies <div class="chevron-container"><i class="fa fa-chevron-down chevron-small"></i></div></a>
                    <div class="collapse" id="policies">
                        <a href="" class="list-group-item no-border footer-sublinks">Privacy</a>
                        <a href="" class="list-group-item no-border footer-sublinks">Terms of Use</a>
                        <a href="" class="list-group-item no-border footer-sublinks">Security</a>
                    </div>
                <a href="#contact-footer" class="list-group-item list-group-item-success" data-toggle="collapse" data-parent="#contact-footer">
                Contact Us <div class="chevron-container"><i class="fa fa-chevron-down chevron-small"></i></div></a>
                    <div class="collapse" id="contact-footer">
                        <a href="" class="list-group-item no-border footer-sublinks">312-123-4567</a>
                        <a href="" class="list-group-item no-border footer-sublinks">Email Us</a>
                        <a href="" class="list-group-item no-border footer-sublinks">Map</a>
                        <a href="" class="list-group-item no-border footer-sublinks">FAQs</a>
                    </div>
        </div>
     );
}
 
export default MobileFooter;