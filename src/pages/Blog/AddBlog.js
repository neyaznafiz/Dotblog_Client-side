import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import auth from '../../Firebase/firebase.init'
import axios from 'axios'
import { toast } from 'react-toastify'

function AddBlog() {

    const { register, formState: { errors }, handleSubmit, reset } = useForm()

    const [user] = useAuthState(auth)
    console.log(user);

    const handlePostBlog = data => {

        const blogInput = {
            email: user.email,
            name: user.displayName,
            title: data.title,
            content: data.content
        }

        axios.post('http://localhost:5000/post-blog', blogInput)
            .then(res => {
                const { data } = res
                if (data?.insertedId) {
                    toast.success('Your blog publish successfully')
                    reset()
                }
                else {
                    toast.error('Faild to publish your blog. Please try again.')
                }
            })
    }

    return (
        <div className='flex justify-center items-center h-screen font-sans'>

            <form onSubmit={handleSubmit(handlePostBlog)} className=' rounded-lg p-7 md:p-16'>

                <div className='w-full grid justify-center mb-4'>
                    <label className="flex items-end bg-inherit text-xl mb-2">Write your blog title here <span className='text-3xl pl-1'>⬎</span></label>
                    <div className='flex justify-center'>
                        <textarea type="text"
                            className="bg-transparent w-[300px] md:w-[750px] h-16 border-r-[2.5px] border-l-[2.5px] border-b-[2.5px]  rounded-none outline-none p-3 text-2xl"
                            {...register("title", {
                                required: {
                                    value: true,
                                    message: 'Please add a title'
                                }
                            })} />
                    </div>
                </div>

                <div className='w-full grid justify-center my-5 md:my-16'>
                    <label className="flex items-end bg-inherit text-xl mb-2 " >Write you content here <span className='text-3xl pl-1'>⬎</span></label>
                    <div className='flex justify-center'>
                        <textarea type="text"
                            className="bg-transparent w-[300px] md:w-[750px] h-60 md:h-96 border-r-[2.5px] border-l-[2.5px]  border-b-[2.5px] rounded-none outline-none p-6 text-xl"
                            {...register("content", {
                                required: {
                                    value: true,
                                    message: 'Please add a title'
                                }
                            })} />
                    </div>
                </div>

                <div className="flex justify-end mb-5 md:my-5 mb-lg-4">
                    <button className='text-2xl hover:text-gray-600'> Publish</button>
                </div>

            </form>

        </div>
    )
}

export default AddBlog
