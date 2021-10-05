import React from 'react';
import useServices from '../../hooks/useServices';

import HeroSection from '../HeroSection/HeroSection';
import ItemValue from '../ItemValue/ItemValue';




const Home = () => {
    const [value] = useServices();

    return (
        <div>
            <HeroSection></HeroSection>

            <div className="services container">
                <div>
                    <h2 className="fs-1 text-start p-4 fw-bold">Our Services:</h2>
                </div>
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 g-4">


                    {
                        value.map(item => <ItemValue
                            key={item.key}
                            item={item}
                        ></ItemValue>)
                    }


                </div>
            </div>


        </div>
    );
};

export default Home;