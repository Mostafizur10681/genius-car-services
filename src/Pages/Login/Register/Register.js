import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    const handleUseNavigateRegister = () => {
        navigate('/login')
    }

    const handleOnSubmitRegister = event => {
        event.preventDefault();
    }
    return (
        <div className='container w-50 mx-auto mt-5 border pb-3 pt-3 bg-light'>
            <h1 className='text-center text-danger'>Please Register</h1>
            <Form onSubmit={handleOnSubmitRegister}>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="btn btn-outline-danger" type="submit">
                    Register
                </Button>
            </Form>
            <p className='mt-2'>Already have an Account? <Link to='/login' className='text-danger text-decoration-none' onClick={handleUseNavigateRegister}>Please Login</Link> </p>
        </div>
    );
};

export default Register;