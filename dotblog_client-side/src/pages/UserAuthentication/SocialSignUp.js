import React from 'react'
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle, useSignInWithTwitter } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../Firebase/firebase.init';
import { FaGoogle, FaTwitter, FaGithub } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle} from 'react-icons/ai';

function SocialSignUp() {

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    const [signInWithTwitter, twitterUser, twitterLoading, twitterError] = useSignInWithTwitter(auth);


    if (googleError, facebookError, githubError, twitterError) {
        toast.error()
    }

    return (
        <div className='flex items-center justify-around'>

            <button onClick={() => signInWithGoogle()} className='text-black'>
               <FaGoogle className='text-3xl'/>
            </button>

            <button onClick={() => signInWithFacebook()} className='text-black'>
                <BsFacebook className='text-3xl'/>
            </button>

            <button onClick={() => signInWithTwitter()} className='text-black'>
                <AiFillTwitterCircle className='text-4xl'/>
            </button>

            <button onClick={() => signInWithGithub()} className='text-black'>
                <FaGithub className='text-3xl'/>
            </button>

        </div>
    )
}

export default SocialSignUp;
