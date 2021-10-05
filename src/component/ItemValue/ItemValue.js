import React from 'react';

const ItemValue = (props) => {
    const { Name, Academic_Course, Question_Bank_for_uv, Question_Bank_for_job, Course_Price, img } = props.item
    return (

        <div>
            <div className="">
                <div className="col">
                    <div className="card" >
                        <div>
                            <img src={img} class="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-name"><span style={{ backgroundColor: 'black', color: 'white', padding: '5px', borderRadius: '5px' }}>Subject</span>:{Name}</h5>
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

export default ItemValue;