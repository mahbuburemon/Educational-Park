import React from 'react';
import picture from '../../images/emon2.jpg'
import picture2 from '../../images/maruf.jpg'
import picture3 from '../../images/polok.jpg'
import picture4 from '../../images/shimu.jpg'
import './About.css'
const About = () => {
    return (
        <div className="about container">
            <h2 className="p-4 fw-bold text-center">Our Team</h2>
            <p className="text-center fs-4">The strong bond of friendship is not always a balanced equation; friendship is not always about giving and taking in equal shares. Instead, friendship is grounded in a feeling that you know exactly who will be there for you when you need something, no matter what or when.</p>
            <div className=" col team row row-cols-1 row-cols-md-3 row-cols-lg-3 g-4">
                <div classname="">
                    <img src={picture} classname="card-img-top" alt="..." />
                    <div classname="card-body">
                        <h5 classname="card-title">Md Mahbubur Rahman</h5>
                        <p>Web Developer</p>
                        <p classname="card-text">Hope lies in dreams, in imagination, and in the courage of those who dare to make dreams into reality</p>

                    </div>
                </div>
                <div>
                    <img src={picture2} classname="card-img" alt="..." />
                    <div classname="card-body">
                        <h5 classname="card-title">Maruf Ahmed</h5>
                        <p>Back-End-Developer</p>
                        <p classname="card-text">Nothing happens unless first we dream.</p>

                    </div>
                </div>
                <div>
                    <img src={picture3} classname="card-img" alt="..." />
                    <div classname="card-body">
                        <h5 classname="card-title">Hasibul Islam Polok</h5>
                        <p>Adviser</p>
                        <p classname="card-text">Dreams don’t work unless you do</p>

                    </div>
                </div>
                <div>
                    <img src={picture4} classname="card-img" alt="..." />
                    <div classname="card-body">
                        <h5 classname="card-title">Israt Shimu</h5>
                        <p>Data Science Engineer</p>
                        <p classname="card-text">The future belongs to those who believe in the beauty of their dreams</p>

                    </div>
                </div>
            </div>

        </div>

    );
};

export default About;