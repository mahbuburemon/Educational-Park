import React from 'react';
import picture from '../../images/edu-3.png';
import './HeroSection.css'

const HeroSection = () => {
    return (
        <div className="banner-container container ">
            <div className="">

                <div className="row align-items-center justify-content-center ">


                    <div className=" col-md-6">
                        <img className="img-sec" src={picture} alt="" />

                    </div>


                    <div className="col-md-6">

                        <h2 className="title fs-1 fw-bold">Education <span className="title-frist">Objective</span></h2>

                        {/* <h2 className="title fs-1 fw-bold"> Education <span className="title-frist">Park </span> </h2> */}

                        <p className="fs-5 fw-normal text-start">Usually an educational objective relates to gaining an ability, a skill, some knowledge, a new attitude etc. rather than having merely completed a given task. Since the achievement of objectives usually takes place during the course and the aims look forward into the student's career and life beyond the course one can expect the aims of a course to be relatively more long term than the objectives of that same course. </p>
                    </div>


                </div>



            </div>

        </div>
    );
};

export default HeroSection;