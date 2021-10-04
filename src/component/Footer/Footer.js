import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="container footer">
            <div className="row">
                <div className="col-md-4">
                    <h1>Educational Park</h1>
                    <p>Education is the process of facilitating  and habit</p>
                </div>
                <div className="col-md-4">
                    <h1>Contact Info</h1>
                    <p>Name:Md MAhbubur Rahman</p>
                    <p>phone:017166****</p>
                </div>
                <div className="col-md-4">
                    <h1>About Services</h1>
                    <ul>
                        <li>Academic Course</li>
                        <li>Question Bank for Admission Test</li>
                        <li>Question Bank for job</li>
                    </ul>

                </div>

            </div>

        </div>
    );
};

export default Footer;