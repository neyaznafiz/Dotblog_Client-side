import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import { toast } from 'react-toastify';
import useLoading from '../../Hooks/useLoading';
import { HashLoader } from "react-spinners";

function SignUp() {

    const { register, formState: { errors }, handleSubmit } = useForm()

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/"

    if (error) {
        toast.error(<p>Error: {error.message}</p>)
    }

    if (loading) {
        <HashLoader color='#05a962' loading={loading} size={250} />
    }

    const handleSignIn = data => {
        signInWithEmailAndPassword(data.email, data.password)
        navigate(from, { replace: true });
        toast.success('Congratulation ! You are successfuly LogIn')
    }

    return (
        <div className='montserrat-alternates font-semibold h-screen grid justify-center items-center md:text-xl text-black bg-image' style={{ backgroundImage: "url('https://i.ibb.co/GHtvgpt/logbg-1.jpg')", backgroundSize: 'cover' }}>

            <div className='w-[300px] md:w-[700px]'>

                <p className="text-3xl font-bold my-10 md:pl-24">Sign In Here</p>

                <form onSubmit={handleSubmit(handleSignIn)}>

                    {/* email */}
                    <div className="form-control w-full bg-transparent border-0 ">

                        <div className='w-full md:flex justify-center mb-4'>
                            <label className="grid items-end bg-inherit md:w-[150px]" >Your Email</label>
                            <div className='flex justify-center'>
                                <input type="email"
                                    className="bg-transparent border-b-[2.5px] border-dashed border-black rounded-none"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid email please'
                                        }
                                    })} />
                            </div>
                        </div>

                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>

                    </div>

                    {/* password */}
                    <div className="form-control w-full bg-transparent border-0">

                        <div className='w-full md:flex justify-center'>
                            <label className="grid items-end bg-inherit md:w-[150px] ">Password</label>

                            <div className='flex justify-center'>
                                <input type="password"
                                    className="bg-transparent border-b-[2.5px] border-dashed border-black rounded-none"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is Required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 characters or longer'
                                        }
                                    })} />
                            </div>
                        </div>

                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        </label>
                    </div>

                    <div className='flex justify-end w-[300px] md:w-[580px]'>
                        <p className='lg:pl-4 text-center'>Forget Password</p>
                    </div>


                    <div className="flex justify-center mx-4 my-5 mb-lg-4">
                        <button className='type-4 btn-selection'> Sign In</button>
                    </div>
                </form>

                <div className='flex justify-center my-7 md:my-14'>
                    <p className='lg:pr-3 text-'> New here ? <Link to='/register' className='link-selection type-3'>Register</Link> </p>
                </div>
            </div>

        </div>
    )
}

export default SignUp
