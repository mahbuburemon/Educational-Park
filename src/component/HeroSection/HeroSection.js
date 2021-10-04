import React from 'react';
import picture from '../../images/edu-3.png'
import Header from '../Header/Header';
import './HeroSection.css'

const HeroSection = () => {
    return (
        <div className="banner-container container ">
            <div className="">

                <div className="row align-items-center justify-content-center ">


                    <div className=" col-md-6">
                        <img className="img-sec" src={picture} alt="" />

                    </div>


                    <div className="col-md-6 justify-content-center ">

                        <h2 className="title">Education Park </h2>
                        <p>What education really means?<br />
                            Education means inculcating moral values, positive thinking, attitude of helping this is call education</p>
                    </div>


                </div>



            </div>

        </div>
    );
};

export default HeroSection;