import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
        <div className='mt-5 bg-dark pb-3'>
            <p className='text-center text-white pt-4'><small> copyright &copy;{year}</small></p>
        </div>
    );
};

export default Footer;