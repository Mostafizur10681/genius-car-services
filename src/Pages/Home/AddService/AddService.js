import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/service`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(
                console.log(data),
                alert('Adding service successfully')
            )

    };
    return (
        <div className='w-50 mx-auto'>
            <h1>Please Add one Service</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Service Name' {...register("name")} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Price' {...register("price")} />
                <input className='mb-2' placeholder='Img' type="text" {...register("img")} />
                <input className='mb-2' type="submit" />
            </form>
        </div>
    );
};

export default AddService;