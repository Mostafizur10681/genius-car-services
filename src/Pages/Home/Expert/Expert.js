import React from 'react';
import { Link } from 'react-router-dom';

const Expert = ({ expert }) => {
    const { img, name } = expert;
    return (
        <div className="service">
            <img src={img} className="image" alt="..." />
            <div className="card-body">
                <h2 className='text-white mt-2'>{name}</h2>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-danger">Go somewhere</a>
            </div>
        </div>

    );
};

export default Expert;