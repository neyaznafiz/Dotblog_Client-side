import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DisplayAllBlogs from './DisplayAllBlogs';

function AllBlogs() {

    const [allBlogs, setAllBlogs] = useState([])
    // console.log(allBlogs);

    useEffect(() => {

            axios.get('https://mighty-dawn-99757.herokuapp.com/blogs')
                .then(res => {
                    const { data } = res
                    setAllBlogs(data);
                })
    }, [])


    return (
        <div className='lg:mt-14 mt-12'>

            <div className='grid justify-center gap-y-4 py-16 px-6 md:px-0'>
                {
                    allBlogs.map(blog => <DisplayAllBlogs
                        key={blog._id}
                        blog={blog}
                    />)
                }
            </div>
        </div>
    )
}

export default AllBlogs
