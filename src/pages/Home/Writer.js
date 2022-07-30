import React from 'react'
import { toast } from 'react-toastify'

function Writer() {

    const handleEmailCopy = () => {
        navigator.clipboard.writeText('neyaznafiz@outlook.com')
        toast.success('Email Copied')
    }

    return (
        <div className='montserrat-alternates text-black'>

            <div className=" p-3 h-[700px] bg-image"
                style={{ backgroundImage: "url('https://i.ibb.co/PYzHW31/writer-bg-2.jpg')", backgroundSize: 'cover' }} >

                    <div>
                        <h1 className=' mt-24 ml-40 text-4xl font-bold border-b border-gray-500'>About Writer.</h1>
                    </div>

                <div class="flex justify-around items-center flex-col lg:flex-row-reverse h-full ">
                    <img src="https://i.ibb.co/BGq0tDq/C05-E11-A4-A312-49-C2-8422-029-F3042-EE14.jpg" class=" lg:w-[400px] w-[250px] rounded-lg shadow-2xl lg:-mt-28  opacity-95" alt='' />

                    <div className='lg:-mt-[64px]'>
                        <h1 class="lg:text-5xl text-3xl py-2 font-bold">Neyaz Mobalik Nafiz</h1>
                        <p class="py-6 px-5 lg:text-lg">I am a MERN Stact Web Developer with a interest of writing and a love for React. <br /> I am a student of Computer Science and Technology. I Love to write about technology. <br /> I hope it will be helpful for people. </p>

                        <div className='lg:flex lg:justify-end justify-center lg:-mr-24 lg:mt-24 lg:text-xl text-lg font-bold'>
                            <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2'>
                                <a href="https://neyaznafiz.web.app/" target="_blank" className='type-1 menu-selection' >Portfolio</a>
                                <a href="https://github.com/neyaznafiz" target="_blank" className='type-1 menu-selection' >Github</a>
                                <div className='w-screen lg:w-auto'>
                                    <p onClick={handleEmailCopy} className=' cursor-pointer hover:border-b-[2px] border-black '>E-mail: neyaznafiz@outlook.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Writer
