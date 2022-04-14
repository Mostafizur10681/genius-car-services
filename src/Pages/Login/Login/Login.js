import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialIcon from '../SocialIcon/SocialIcon';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()

    if (user) {
        navigate('/home')
    }
    const handleOnSubmitLogin = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value
        signInWithEmailAndPassword(email, password)
    }

    let errorElements;

    if (error) {
        errorElements = <div>
            <p className='text-danger'>Error: {error?.message}</p>
        </div>
    }
    const handleRegister = event => {
        navigate('/register')
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('Sent email');
    }
    return (
        <div className='container w-50 mx-auto mt-5 border pb-3 pt-3 bg-light'>
            <h1 className='text-center text-danger'>Please Login</h1>
            <Form onSubmit={handleOnSubmitLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Accept all Terms and Condition" />
                </Form.Group>
                <Button variant="btn" className='w-50 d-block mx-auto text-white' style={{ backgroundColor: 'rgb(94, 166, 169)' }} type="submit">
                    Login
                </Button>
            </Form>
            <p className='mt-2'>New to The Car Doctor? <Link className='text-primary text-decoration-none' to='/register' onClick={handleRegister}>Please Register</Link> </p>
            <p className='mt-2'>Forget Password? <Link className='text-primary text-decoration-none' to='/register' onClick={resetPassword}>Reset Password</Link> </p>
            <SocialIcon></SocialIcon>
        </div>
    );
};

export default Login;