import React from 'react';
import '../../styles/contact-styles/contact.css';
import ContactForm from './contact-form';

const ContactInfo = () => {
    return ( 
        <div id="contact">
            <div class="container-fluid text-center">
                <br></br>
                <h3>CONTACT US</h3>
                <br></br>
                <p>The staff at C.A. Jewelers will always be more than willing to help you with any questions/problems you may have. For any general questions, please refer to our <a href="./faq">FAQ page</a>. If you require additional assistance or need to express any potential concerns, feel free to contact us via your preferred method below. </p>
                <br></br>
            </div>
            
            <div class="container-fluid text-center" id="contact-info">
                <p><strong>Contact: </strong>Susie Lam & Tommy Lam</p>
                <p><i class="fas fa-phone icon-grey"></i> (312) 419-8829</p>
                <p><i class="fas fa-phone icon-grey"></i> (312) 332-3883</p>
                <p><i class="fas fa-fax icon-grey"></i> (312) 419-8281</p>
                <i class="fas fa-envelope icon-grey"></i><a> info@cajewelers.com</a>
                <br></br>
                <input id="appointment-btn" type="submit" class="btn submit-form-btn" value="SCHEDULE AN APPOINTMENT"></input>
            </div>
            <br></br>
            <h5 class="text-center"><strong>EMAIL US</strong></h5>
            <br></br>
            <ContactForm/>
            <div class="container-fluid text-center">
                <h5><strong>Store Hours </strong></h5>
                <p>Monday - Friday: 10:30am - 6:00pm <br></br>
                    Saturday: 10:30am - 5:00pm <br></br>
                    Sunday: Closed
                </p>
                <br></br>
                <h5><strong> Find our Store </strong></h5>
                <p>9 S Wabash Ave, Chicago, IL 60603</p>
            </div>
        </div>
     );
}
 
export default ContactInfo;