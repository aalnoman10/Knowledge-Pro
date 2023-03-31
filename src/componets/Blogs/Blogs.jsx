import React from 'react';
import { useEffect, useState } from 'react'
import Blog from '../Header/Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('pake.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    // console.log(blogs[0].id);

    return (
        <div className='blog-container'>
            <div className='blogs'>
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
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