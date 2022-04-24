import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {
    const { _id, name, img, description, price } = service;

    const navigate = useNavigate();
    const handleServiceNavigate = name => {
        navigate(`/service/${name}`)
    }
    return (
        <div className='service'>
            <img className='image' src={img} alt="" />
            <h2 className='text-white mt-2'>{name}</h2>
            <h5 className='price'>Price: ${price}</h5>
            <p><small>{description}</small></p>
            <button onClick={() => handleServiceNavigate(_id)} className='btn btn-danger'>Book: {name}</button>
        </div>
    );
};

export default Service;