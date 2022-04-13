import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div id='services' className='container mt-5'>
            <h1 className='services-title mt-3 mb-2 text-danger'>Our Services</h1>
            <hr style={{ width: '20%', margin: '0  auto' }} className='mb-4' />
            <div className="services-container">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services; <h1>This is Services</h1>