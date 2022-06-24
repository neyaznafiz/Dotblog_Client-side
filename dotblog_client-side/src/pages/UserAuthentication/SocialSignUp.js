import React from 'react'
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle, useSignInWithTwitter } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../Firebase/firebase.init';
import { FaGoogle, FaTwitter, FaGithub } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import Loading from '../../components/Shared/Loading';
import { useLocation, useNavigate } from 'react-router-dom';

function SocialSignUp() {

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    const [signInWithTwitter, twitterUser, twitterLoading, twitterError] = useSignInWithTwitter(auth);

    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/"
    // navigate(from, { replace: true });

    if (googleError, facebookError, githubError, twitterError) {
        toast.error(<>{googleError?.message}, {facebookError?.message}, {githubError?.message}, {twitterError?.message}</>)
    }

    if (googleLoading, facebookLoading, githubLoading, twitterLoading) {
        return <Loading />
    }


    return (
        <div className='flex items-center justify-around'>

            <button onClick={() => signInWithGoogle()} className='text-black'>
                <FaGoogle className='text-3xl' />
            </button>

            <button onClick={() => signInWithFacebook()} className='text-black'>
                <BsFacebook className='text-3xl' />
            </button>

            <button onClick={() => signInWithTwitter()} className='text-black'>
                <AiFillTwitterCircle className='text-4xl' />
            </button>

            <button onClick={() => signInWithGithub()} className='text-black'>
                <FaGithub className='text-3xl' />
            </button>

        </div>
    )
}

export default SocialSignUp;
