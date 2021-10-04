import React from 'react';
import picture from '../.././images/edu-1.png';
import './About.css'

const About = () => {
    return (
        <div className=" row about container">

            <div className="col-md-6">
                <img src={picture} alt="" />
            </div>

            <div className="col-md-6">
                <h2>About Us</h2>
                <p>Education is the process of facilitating  and habits. Educational methods include teaching, training, storytelling, discussion and directed research.Education refers to the discipline that is concerned with methods of teaching and learning in schools or school-like environments, as opposed to various nonformal and informal means of socialization.</p>
            </div>






        </div>
    );
};

export default About;