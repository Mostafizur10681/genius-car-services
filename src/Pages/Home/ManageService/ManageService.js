import React from 'react';
import useService from '../../../hook/useService';

const ManageService = () => {
    const [services, setServices] = useService()

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            const url = `http://localhost:5000/service/${id}`;
            fetch(url, {
                method: 'DELETE',

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaing = services.filter(service => service._id !== id)
                    setServices(remaing)
                })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h1>manage</h1>
            {
                services.map(service => <div key={service._id}>
                    <h5>{service.name}
                        <button onClick={() => handleDelete(service._id)}>X</button>
                    </h5>

                </div>)
            }
        </div>
    );
};

export default ManageService;