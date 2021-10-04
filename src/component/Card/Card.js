import React from 'react';
import './Card.css'

const Card = (props) => {
    const { Name, Academic_Course, Question_Bank_for_uv, Question_Bank_for_job, Course_Price, img } = props.service

    return (
        <div>
            <div className="">
                <div className="col ">
                    <div className="card" >
                        <div>
                            <img src={img} class="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-name">Name:{Name}</h5>
                            <p><span>Academic Course:</span>{Academic_Course}</p>
                            <p><span> Admission Question Bank :</span>{Question_Bank_for_uv}</p>
                            <p><span>  Question Bank job:</span>{Question_Bank_for_job}</p>
                            <p><span> Course Price:</span>{Course_Price}</p>

                            <button className="buy-btn">Buy Now</button>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Card;