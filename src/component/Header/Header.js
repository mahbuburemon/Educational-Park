import React from 'react';

import { Link } from 'react-router-dom';

import './Header.css';


const Header = () => {
    return (

        <div>

            <div className="header container" >

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