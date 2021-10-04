import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Card from '../Card/Card';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./tools.JSON')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    return (
        <div className="services container">
            <div className="doctor row row-cols-1 row-cols-md-3 row-cols-lg-3 g-4">

                {
                    services.map(service => <Card
                        key={service.key}
                        service={service}

                    ></Card>)
                }

            </div>
        </div>
    );
};

export default Services;