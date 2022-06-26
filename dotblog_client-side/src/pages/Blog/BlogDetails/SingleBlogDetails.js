import axios from 'axios'
import React, { useEffect, useState } from 'react'
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
        <div>
            <p>{name}</p>
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    )
}

export default SingleBlogDetails
