import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiOutlineHeart } from 'react-icons/ai';
import auth from '../../../Firebase/firebase.init';

const DisplayAllBlogs = ({ blog }) => {

    const { _id, name, title, content } = blog

    const [user] = useAuthState(auth)

    return (
        <div className='montserrat-alternates'>

            <div className='border-2 lg:border-4 md:border-4 border-gray-500 rounded-xl lg:w-[900px] md:w-[700px] p-6'>
                <p className='font-semibold tracking-wider text-lg pb-5'>{name}</p>
                <div className='pl-7 mb-3'>
                <h1 className='text-xl md:text-4xl font-semibold hover:text-[#05a962]'>{title}</h1>
                </div>

                <div className='pl-7 py-2'>
                    <p><AiOutlineHeart className='text-2xl'/></p>
                </div>
            </div>

        </div>
    );
};

export default DisplayAllBlogs;