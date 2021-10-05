import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    const element = <FontAwesomeIcon icon={faEnvelope} />
    const element2 = <FontAwesomeIcon icon={faMobile} />
    const element3 = <FontAwesomeIcon icon={faLocationArrow} />

    return (
        <div className="container footer">
            <div className="row">
                <div className="col-md-4">
                    <h2 className="footer-head fs-3">Educational Park</h2>
                    <div className="footer-p text-start">
                        <p >An Educational objective relates to gaining an ability, a skill, some knowledge, a new attitude etc. rather than having merely completed a given task.</p>
                    </div>

                </div>

                <div className="col-md-4">
                    <h2 className="footer-head fs-3">About Park</h2>

                    <div className="footer-p">
                        <ul>

                            <li>About Us</li>
                            <li>Our Team</li>
                            <li>Careers </li>
                            <li>Services </li>
                        </ul>



                    </div>

                </div>
                <div className="col-md-4">
                    <h2 className="footer-head fs-3">Contact Info</h2>
                    <div className="footer-p  text-start">
                        <p><span className="contact-info">{element} </span> mahbuburemon60@gmail.com</p>
                        <p> <span className="contact-info">{element2}</span> 01516762425</p>
                        <p> <span className="contact-info">{element3}</span> S/K Mannan road,Tongi-Gazipur</p>
                        <p></p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Footer;