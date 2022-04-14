import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialIcon from '../SocialIcon/SocialIcon';

const Register = () => {
    const nameRef = useRef('')
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const handleUseNavigateRegister = () => {
        navigate('/login')
    }

    if (user) {
        navigate('/home')
    }

    const handleOnSubmitRegister = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div className='container w-50 mx-auto mt-5 border pb-3 pt-3 bg-light'>
            <h1 className='text-center text-danger'>Please Register</h1>
            <Form onSubmit={handleOnSubmitRegister}>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Control ref={nameRef} type="name" placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Accept All Terms and Condition" />
                </Form.Group>
                <Button className='w-50 d-block mx-auto text-white' style={{ backgroundColor: 'rgb(94, 166, 169)' }} variant="btn " type="submit">
                    Register
                </Button>
            </Form>
            <p className='mt-2'>Already have an Account? <Link to='/login' className='text-primary text-decoration-none' onClick={handleUseNavigateRegister}>Please Login</Link> </p>
            <SocialIcon></SocialIcon>
        </div>
    );
};

export default Register;