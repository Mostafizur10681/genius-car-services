import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {

    const { serviceId } = useParams();
    const [service, setService] = useState({})

    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div className='text-center mt-5'>
            <h1>Welcome to my Service Details : {service.name}</h1>
            <div>
                <Link to='/checkout'>
                    <button className='btn btn-danger'>Procced CheckOut</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;