import React from 'react'
import AllBlogs from '../Blog/AllBlogs/AllBlogs'
import Banner from './Banner'

function Home() {
    return (
        <div className=''>
           
           <div className=''>
           <Banner />
           <AllBlogs></AllBlogs>
           </div>

        </div>
    )
}

export default Home
