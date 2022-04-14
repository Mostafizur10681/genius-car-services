import React from 'react';
import google from '../../../images/google.png'
import facebook from '../../../images/facebook.png'
import github from '../../../images/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialIcon = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    let errorElements;

    if (error || error1) {
        errorElements = <div>
            <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
        </div>
    }

    if (user || user1) {
        navigate('/home')
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='w-50 bg-danger'></div>
                <p className='mx-4 mt-3'>OR</p>
                <div style={{ height: '1px' }} className='w-50 bg-danger'></div>
            </div>
            {errorElements}
            <div>
                <button onClick={() => signInWithGoogle()} type="button" style={{ backgroundColor: 'rgb(94, 166, 169)' }} class="btn btn-primary w-50 d-block mx-auto my-2">
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='ms-2'>SignIn With Google</span>
                </button>
                <button type="button" style={{ backgroundColor: 'rgb(94, 166, 169)' }} class="btn btn-primary w-50 d-block mx-auto my-2">
                    <img style={{ width: '30px' }} src={facebook} alt="" />
                    <span className='ms-2'>SignIn With Facebook</span>
                </button>
                <button onClick={() => signInWithGithub()} type="button" style={{ backgroundColor: 'rgb(94, 166, 169)' }} class="btn btn-primary w-50 d-block mx-auto my-2">
                    <img style={{ width: '30px' }} src={github} alt="" />
                    <span className='ms-2'>SignIn With GitHub</span>
                </button>
            </div>
        </div>
    );
};

export default SocialIcon;