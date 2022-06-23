import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";

function SignUp() {

    const { register, formState: { errors }, handleSubmit } = useForm()


    const handleSignIn = data => {
        // signInWithEmailAndPassword(data.email, data.password)
    }

    return (
        <div>

            {/* <div>
               <label htmlFor="">Type your email</label>
               <input type="email" name='email' className='bg-transparent border-b border-dashed' />
           </div> */}


            <form onSubmit={handleSubmit(handleSignIn)}>

                <div className="form-control w-full bg-transparent border-0 ">
                    <label className="form-label text-white bg-inherit" >Your Email</label>
                    <input type="email"
                        className="input input-bordered bg-transparent border text-white"
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
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    </label>

                </div>

                <div className="form-control w-full bg-transparent border-0">
                    <label className="form-label text-white">Password</label>
                    <input type="password"
                        className="input input-bordered  bg-transparent border text-white"
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
                    <label className="label">
                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                    </label>
                </div>

                <div className="grid lg:flex flex-row justify-center lg:justify-between align-items-center mb-4">
                    <div>
                        <p className='lg:pl-4 text-center'>Forget Password</p>
                    </div>

                    <div>
                        <p className='lg:pr-3'>Are you new here ? <Link to='/signup'>Sign Up</Link> </p>
                    </div>
                </div>

                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <input type="submit" value='log In' className="border px-3 py-1 rounded-md hover:bg-white hover:text-black" />
                </div>
            </form>

        </div>
    )
}

export default SignUp
