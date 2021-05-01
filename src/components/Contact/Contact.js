import React from 'react';
import './Contact.css';
import contactBg from '../../images/contactBanner.PNG';
import Navbar from '../Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

const Contact = () => {
    return (
        <div className="contact-container">
            <img src={contactBg} alt="" />
            <div className="row w-100">
                <div className="col-md-10 m-auto">
                    <div className="row w-100">
                        <div className="col-md-5">
                            <h3 className="text-uppercase text-white">don't be shy!</h3>
                            <p className="text-white">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                            <div className="d-flex align-items-center mb-2">
                                <FontAwesomeIcon className="text-warning mr-3" icon={faEnvelopeOpen} />
                                <div>
                                    <small className="text-white">MAIL ME</small> <br />
                                    <strong className="text-white">misbahuddins100@gmail.com</strong>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <FontAwesomeIcon className="text-warning mr-3" icon={faPhoneAlt} />
                                <div>
                                    <small className="text-white">CALL ME</small> <br />
                                    <strong className="text-white">+880-xxx-xxx</strong>
                                </div>
                            </div>
                            <div  className="text-white mt-4">
                                <GitHubIcon className="mr-3"></GitHubIcon>
                                <LinkedInIcon className="mr-3"></LinkedInIcon>
                                <TwitterIcon className="mr-3" ></TwitterIcon>
                                <FacebookIcon></FacebookIcon>
                            </div>
                        </div>

                        <div className="col-md-7">
                            <form action="https://formspree.io/f/meqveklj" method="POST">
                                <input className="text-white" type="text" name="name" placeholder="YOUR NAME" />
                                <input type="email" name="email" placeholder="YOUR EMAIL" />
                                <input type="text" name="subject" placeholder="YOUR SUBJECT" />
                                <br />
                                <textarea name="message" placeholder="YOUR MESSAGE" cols="75" rows="6"></textarea>
                                <button type="submit" className="btn my-button mt-2" >SEND MESSAGE</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="col-md-1 " style={{marginTop: '10%'}}>
                    <Navbar></Navbar>
                </div>
            </div>
        </div>
    );
};

export default Contact;