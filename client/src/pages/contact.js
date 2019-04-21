import React from 'react';
import GlobalHeader from '../components/global-header';
import GlobalFooter from '../components/global-footer';
import ContactForm from '../components/contact-components/contact-form';
import Map from '../components/contact-components/map';
import Spinner from '../components/spinner';

import '../styles/contact-styles/contact.css';

class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sendingMessage: false,
            showSuccess: false,
            name: '',
            surname: '',
            email: '',
            phone: '',
            message: ''
        }
    }

    componentDidMount() {
        document.title = 'Contact C.A. Jewelers Inc.';
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, console.log(this.state))
    }

    sendContactMessage = async () => {
        this.setState({ sendingMessage: true });
        let state = this.state; 
        try {
            let apiEndPoint = window.location.origin + '/api/contact-form';
            
            await fetch(apiEndPoint, {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({ state })
            })
            .then(response => {
                console.log(response);
                this.setState({ 
                    sendingMessage: false,
                    name: '',
                    surname: '',
                    email: '',
                    phone: '',
                    message: '' 
                });
                if(response.status === 200) {
                    this.setState({ showSuccess: true });
                    setTimeout(() => { this.setState({ showSuccess: false })}, 5000);
                } else {
                    alert('something went wrong, email not sent');
                }
            })
        } catch(err) {
            throw err;
        }
    }

    render() {
        const successfulMessage = (
            <div id="contact-success-msg">
                <div>
                    Message successfully sent. <br/>
                    We'll get back to you ASAP!
                </div>
            </div>
        );

        return ( 
            <div id="contact-page">
                { this.state.sendingMessage && <Spinner/> }
                { this.state.showSuccess && successfulMessage }
                <GlobalHeader/>
                <div id="contact">
                    <div className="container text-center">
                        <br></br>
                        <h3>CONTACT US</h3>
                        <br></br>
                        <p>The staff at C.A. Jewelers will always be more than willing to help you with any questions/problems you may have. For any general questions, please refer to our <a href="./faq">FAQ page</a>. If you require additional assistance or need to express any potential concerns, feel free to contact us via your preferred method below. </p>
                        <br></br>
                    </div>
                    
                    <div id="contact-info">
                        <p className="text-center"><strong>Contact: </strong>Susie Lam & Tommy Lam</p>
                        <div>
                            <p><i className="fas fa-phone icon-grey"></i> (312) 419-8829</p>
                            <p><i className="fas fa-phone icon-grey"></i> (312) 332-3883</p>
                            <p><i className="fas fa-fax icon-grey"></i> (312) 419-8281</p>
                            <i className="fas fa-envelope icon-grey"></i><a> info@cajewelers.com</a>
                            <br></br>
                            <input id="appointment-btn" type="submit" className="btn submit-form-btn" value="SCHEDULE AN APPOINTMENT"></input>
                        </div>
                    </div>
                    <br></br>
                    <h5 className="text-center"><strong>EMAIL US</strong></h5>
                    <br></br>
                    <ContactForm
                        onChangeHandler = { this.onChangeHandler }
                        sendContactMessage = { this.sendContactMessage }
                    />
                    <div className="container-fluid text-center">
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
                <Map/>
                <GlobalFooter/>
            </div>
        );
    }
}
 
export default Contact;