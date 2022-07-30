// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
import Typed from "react-typed"

function Banner() {

    // const [newsImg, setNewsImg] = useState({})
    // console.log(newsImg);

    // useEffect(() => {

    //     axios.get('https://newsapi.org/v2/everything?q=tesla&from=2022-05-26&sortBy=publishedAt&apiKey=7f4220f912f548ebb30ccc79b191ab0e')
    //         .then(res => {
    //             const { data } = res
    //             setNewsImg(data)
    //         })

    // }, [])

    return (
        <div className='-mt-2'>

            {/* <!-- Background image --> */}
            <div className=" p-3 h-[170px] md:h-[400px] text-center bg-image w-full"
                style={{ backgroundImage: "url('https://i.ibb.co/ZSfGvf6/home-bg.jpg')", backgroundSize: 'cover' }} >

                <div className="mask h-full" >
                    <div className="flex justify-center items-center h-full">
                        <div className="text-black p-5">
                            {/* <h1 className="mb-3">Heading</h1> */}
             
                                <Typed
                                    strings={[
                                        " ❝Two things are infinity: the universe and the human stupidity. <br /> And I'm not sure about the universe.❞ "
                                    ]}
                                    typeSpeed={10}
                                    className="mb-3 raleway text-md md:text-5xl font "
                                />

                            <div className='flex justify-between md:justify-around '>
                                <span></span> <span className='text-md md:text-xl'>~ Elbert Hubbard ~</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div >
    )
}

export default Banner
