import React from 'react';

const DisplayAllBlogs = ({blog}) => {

    const {title, content} = blog

    return (
        <div>
            <p>{title}</p>
            <p>{content}</p>
        </div>
    );
};

export default DisplayAllBlogs;