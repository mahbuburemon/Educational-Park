import React from 'react';

import { Link } from 'react-router-dom';

import './Header.css';
import logo from '../../images/edu-1.jpg'


const Header = () => {
    return (



        <div className="header container" >
            <div>
                <div className="edu-park d-flex align-items-center  justify-content-center">
                    <h1 className="fw-bold">Educational Park</h1>
                    <img src={logo} alt="" />
                </div>

                <ul className="d-flex align-items-center  justify-content-start">


                    <Link to="/home" className="items">
                        <li>Home</li>
                    </Link>
                    <Link to="/services" className="items">
                        <li>Services</li>
                    </Link>
                    <Link to="/about" className="items">
                        <li>About us</li>
                    </Link>
                    <Link to="contact" className="items">
                        <li>Contact us</li>
                    </Link>
                </ul>

            </div >
        </div>
    );
};

export default Header;