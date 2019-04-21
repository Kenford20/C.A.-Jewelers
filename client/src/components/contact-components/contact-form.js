import React from 'react';

const ContactForm = () => {
    return ( 
        <div id="contact-form">
            <div>
                <div className="row">
                    <div className="col-lg-8 col-lg-offset-2">

                    <form id="contact_form" method="post" action="/api/contact-form" role="form">
                    <div className="messages"></div>
                    <div className="controls">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input id="form_name" type="text" name="name" className="form-control" placeholder="FIRST NAME" required="required" data-error="Firstname is required."></input>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input id="form_lastname" type="text" name="surname" className="form-control" placeholder="LAST NAME (OPTIONAL)"></input>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input id="form_email" type="email" name="email" className="form-control" placeholder="EMAIL" required="required" data-error="Valid email is required."></input>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input id="form_phone" type="tel" name="phone" className="form-control" placeholder="PHONE NUMBER (OPTIONAL)"></input>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <textarea id="form_message" name="message" className="form-control" placeholder="MESSAGE" rows="4" required="required" data-error="Please,leave us a message."></textarea>
                                    <div className="help-block with-errors"></div>
                                </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <div className="g-recaptcha" data-sitekey="6LfwyDEUAAAAAHwP7cx_q_Rdk4UN1dJ8S1XR9A04"></div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                <input type="submit" className="btn submit-form-btn" value="Submit"></input>
                            </div>
                        </div>
                    </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ContactForm;