import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialIcon from '../SocialIcon/SocialIcon';

const Register = () => {

    const [agree, setAgree] = useState(false)
    const nameRef = useRef('')
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();

    const handleUseNavigateRegister = () => {
        navigate('/login')
    }

    if (user) {
        console.log(user)
    }

    const handleOnSubmitRegister = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value

        // const checkbox = event.target.terms.checked;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home')
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
                    <Form.Check className={agree ? 'ms-1' : 'ms-1 text-danger'} onClick={() => setAgree(!agree)} type="checkbox" name='terms' label="Accept All Terms and Condition" />
                </Form.Group>
                <Button disabled={!agree}
                    className='w-50 d-block mx-auto text-white'
                    style={{ backgroundColor: 'rgb(94, 166, 169)' }}
                    variant="btn " type="submit">
                    Register
                </Button>
            </Form>
            <p className='mt-2'>Already have an Account? <Link to='/login' className='text-primary text-decoration-none' onClick={handleUseNavigateRegister}>Please Login</Link> </p>
            <SocialIcon></SocialIcon>
        </div>
    );
};

export default Register;