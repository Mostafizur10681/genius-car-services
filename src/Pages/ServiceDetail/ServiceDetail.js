import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {

    const { serviceName } = useParams();
    return (
        <div className='text-center mt-5'>
            <h1>Welcome to my Service Details : {serviceName}</h1>
            <div>
                <Link to='/checkout'>
                    <button className='btn btn-danger'>Procced CheckOut</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;