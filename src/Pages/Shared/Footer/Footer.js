import React from 'react';

const Footer = () => {
    const yearNow = new Date().getFullYear();
    return (
        <div>
            <h1><small>&copy; Company 2015-{yearNow}</small></h1>
        </div>
    );
};

export default Footer;