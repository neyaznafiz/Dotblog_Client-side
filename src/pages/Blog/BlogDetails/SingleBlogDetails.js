import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { BiMessageRounded } from 'react-icons/bi'
import { BsBookmark } from 'react-icons/bs'
import { RiShareForwardLine } from 'react-icons/ri'
import { useParams } from 'react-router-dom'

function SingleBlogDetails() {
    const { ID } = useParams()

    const [fullBlog, setFullBlog] = useState({})
    console.log(fullBlog);

    const { name, title, content } = fullBlog

    useEffect(() => {

        axios.get(`http://localhost:5000/blog/${ID}`)
            .then(res => {
                const { data } = res
                setFullBlog(data)
            })
    }, [ID])

    return (
        <div className='montserrat-alternates h-screen flex justify-center '>

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
                        <BsBookmark className='text-2xl hover:scale-125 hover:text-gray-600' />
                        <RiShareForwardLine className='text-3xl hover:scale-125 hover:text-gray-600' />

                    </div>
                </div>
            </div>

            {/* <div>
                sdffffffffffffffffffff
            </div> */}

        </div>
    )
}

export default SingleBlogDetails
