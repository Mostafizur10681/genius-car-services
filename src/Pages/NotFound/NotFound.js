import React from 'react';
import notFound from '../../images/notFound.jpg'
const NotFound = () => {
    return (
        <div>
            <h2 className='text-primay text-center'>This is not availale which are you looking for!!</h2>
            <img className='w-100 mx-auto' height={600} src={notFound} alt="" />
        </div>
    );
};

export default NotFound;