// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

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
        <div className='md:mx-24'>

            {/* <!-- Background image --> */}
            <div className=" p-3 md:p-5 md:mx-16 h-[170px] md:h-[700px] text-center bg-image"
                style={{ backgroundImage: "url('https://i.ibb.co/R7yxJ1f/newspaper-bg.jpg')", backgroundSize: 'cover' }} >

                <div className="mask h-full" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                    <div className="flex justify-center items-center h-full">
                        <div className="text-white p-5">
                            {/* <h1 className="mb-3">Heading</h1> */}
                            <h4 className="mb-3 raleway text-md md:text-5xl font ">“Two things are infinity: the universe and the human stupidity. <br /> And I'm not sure about the universe.”</h4>
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
