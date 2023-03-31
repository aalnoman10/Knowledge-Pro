import React from 'react';
import { useEffect, useState } from 'react'
import Blog from '../Blog/Blog';
import './Blogs.css'

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('pake.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className='blog-container'>
            <div className='blogs'>
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                    ></Blog>)
                }
            </div>
            <div className="marks">
                bookmarked blogs
            </div>
        </div>
    );
};

export default Blogs;