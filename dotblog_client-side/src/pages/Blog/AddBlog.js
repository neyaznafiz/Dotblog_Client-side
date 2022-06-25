import React from 'react'
import { useForm } from 'react-hook-form'

function AddBlog() {

    const { register, formState: { errors }, handleSubmit } = useForm()

    const handlePostBlog = () => {

    }

    return (
        <div className='flex justify-center items-center h-screen'>

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
