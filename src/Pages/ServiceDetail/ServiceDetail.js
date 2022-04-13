import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {

    const { serviceName } = useParams();
    return (
        <div>
            <h1>Welcome to my Service Details : {serviceName}</h1>
        </div>
    );
};

export default ServiceDetail;