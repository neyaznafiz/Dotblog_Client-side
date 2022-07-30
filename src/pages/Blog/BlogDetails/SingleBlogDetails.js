import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { AiOutlineHeart } from 'react-icons/ai'
import { BiMessageRounded } from 'react-icons/bi'
import { BsBookmark } from 'react-icons/bs'
import { RiShareForwardLine } from 'react-icons/ri'
import { useParams } from 'react-router-dom'

function SingleBlogDetails() {

    const { register, formState: { errors }, handleSubmit, reset } = useForm()

    const { ID } = useParams()
    const [fullBlog, setFullBlog] = useState({})
    console.log(fullBlog);

    const { name, title, content } = fullBlog

    useEffect(() => {

        axios.get(`https://mighty-dawn-99757.herokuapp.com/blog/${ID}`)
            .then(res => {
                const { data } = res
                setFullBlog(data)
            })
    }, [ID])

    return (
        <div>
            <div className='montserrat-alternates flex justify-center lg:mt-14 mt-12'>

                <div className='m-5 w-[1250px] p-5 lg:p-16 md:p-16'>
                    <div className='mb-10'>
                        <p className='text-2xl font-bold tracking-wider'>{name}</p>
                    </div>

                    <div className='md:flex flex-row-reverse'>

                        <div className='grid justify-center gap-y-5'>
                            <div className='md:ml-10'>
                                <h1 className='text-3xl lg:text-4xl md:text-4xl font-bold'>{title}</h1>
                            </div>

                            <div className='lg:px-16 md:px-16'>
                                <p className='text-lg lg:text-2xl md:text-2xl font-semibold tracking-wide'>{content}</p>
                            </div>
                        </div>

                        <div className='flex md:flex-col items-center gap-7 py-9 lg:py-28'>
                            <AiOutlineHeart className='text-3xl hover:text-red-600 hover:scale-125' />
                            <BsBookmark className='text-2xl hover:scale-125' />
                            <RiShareForwardLine className='text-3xl hover:scale-125' />

                        </div>
                    </div>
                </div>

            </div>

            <div className='w-full grid justify-center mb-4 -mt-10 lg:mt-10'>
                <label className="flex items-end bg-inherit text-xl mb-2">Drop your comment here <span className='text-3xl pl-1'>⬎</span></label>
                <div className='flex justify-center'>
                    <textarea type="text"
                        className="bg-transparent w-[300px] md:w-[750px] h-16 border-r-[2.5px] border-l-[2.5px] border-b-[2.5px] border-black border-opacity-80  rounded-none outline-none p-3 text-2xl"
                        {...register("title", {
                            required: {
                                value: true,
                                message: 'Please add a title'
                            }
                        })} />
                </div>
            </div>

        </div>
    )
}

export default SingleBlogDetails
