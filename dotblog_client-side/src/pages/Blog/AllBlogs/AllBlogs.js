import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DisplayAllBlogs from './DisplayAllBlogs';

function AllBlogs() {

    const [allBlogs, setAllBlogs] = useState([])
    console.log(allBlogs);

    useEffect(() => {

        axios.get('http://localhost:5000/blogs')
            .then(res => {
                const { data } = res
                setAllBlogs(data);
            })

    }, [])


    return (
        <div>
            {
                allBlogs.map(blog => <DisplayAllBlogs
                    key={blog._id}
                    blog={blog}
                />)
            }
        </div>
    )
}

export default AllBlogs
