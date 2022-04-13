import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()

    const handleOnSubmitLogin = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value

        console.log(email, password)
    }

    const handleRegister = event => {
        navigate('/register')
    }
    return (
        <div className='container w-50 mx-auto mt-5 border pb-3 pt-3 bg-light'>
            <h1 className='text-center text-danger'>Please Login</h1>
            <Form onSubmit={handleOnSubmitLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="btn btn-outline-danger" type="submit">
                    Login
                </Button>
            </Form>
            <p className='mt-2'>New to The Car Doctor? <Link className='text-danger text-decoration-none' to='/register' onClick={handleRegister}>Please Register</Link> </p>
        </div>
    );
};

export default Login;