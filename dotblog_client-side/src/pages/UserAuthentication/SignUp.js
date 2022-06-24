import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init'
import { async } from '@firebase/util';
import { toast } from 'react-toastify';
import SocialSignUp from './SocialSignUp';
import Loading from '../../components/Shared/Loading';

function SignUp() {

    const { register, formState: { errors }, handleSubmit } = useForm()
    console.log(register);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [sendEmailVerification, sending, emailVerificationError] = useSendEmailVerification(auth);


    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/"

    if (error, emailVerificationError) {
        return toast.error(<p>Error: {error?.message}, {emailVerificationError?.message}</p>)
    }

    if (loading, sending) {
        <div className='flex justify-center items-center h-screen'><Loading /></div>
    }

    const handleSignUp = async data => {
        await createUserWithEmailAndPassword( data.email, data.password)
        navigate(from, { replace: true });
        await sendEmailVerification()
        toast.success('Verification email send to {data.email}')
        toast.success('Congratulation ! Your registration was successful')
    }


    return (
        <div className='montserrat-alternates font-semibold h-screen grid justify-center items-center md:text-xl text-black bg-image' style={{ backgroundImage: "url('https://i.ibb.co/GHtvgpt/logbg-1.jpg')", backgroundSize: 'cover' }}>

            <div className='w-[300px] md:w-[700px]'>

                <p className="text-3xl font-bold my-10 md:pl-24">Register Here</p>

                <form onSubmit={handleSubmit(handleSignUp)}>

                    {/* name */}
                    <div className="form-control w-full bg-transparent border-0 ">

                        <div className='w-full md:flex justify-center mb-4'>
                            <label className="grid items-end bg-inherit md:w-[150px]" >Your Name</label>
                            <div className='flex justify-center'>
                                <input type="text"
                                    className="bg-transparent border-b-[2.5px] border-dashed border-black rounded-none outline-none px-2"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is Required'
                                        }
                                    })} />
                            </div>
                        </div>

                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>

                    </div>


                    {/* email */}
                    <div className="form-control w-full bg-transparent border-0 ">

                        <div className='w-full md:flex justify-center mb-4'>
                            <label className="grid items-end bg-inherit md:w-[150px]" >Your Email</label>
                            <div className='flex justify-center'>
                                <input type="email"
                                    className="bg-transparent border-b-[2.5px] border-dashed border-black rounded-none outline-none px-2"
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
                                    className="bg-transparent border-b-[2.5px] border-dashed border-black rounded-none outline-none px-2"
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

                    <div className="flex justify-center mx-4 my-5 mb-lg-4">
                        <button className='type-4 btn-selection'> Register </button>
                    </div>
                </form>

                <div className='flex justify-center my-7 md:my-14'>
                    <p className='lg:pr-3'>Have an account ? <Link to='/signin' className='type-3 link-selection'>Sign In</Link> </p>
                </div>

                <SocialSignUp />
            </div>

        </div>
    )
}

export default SignUp
