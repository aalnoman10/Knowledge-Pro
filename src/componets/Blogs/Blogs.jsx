import React from 'react';
import { useEffect, useState } from 'react'
import Blog from '../Blog/Blog';
import './Blogs.css'

// data loading
const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('pake.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);


    const [bookmark, setBookmark] = useState([]);
    const markAsRead = (blog) => {
        const newBookmark = [...bookmark, blog];
        setBookmark(newBookmark);
    };

    // update bookmark incomplete
    useEffect(() => {
        // console.log(bookmark);
        const bookmarkArr = [];
        bookmarkArr.push(bookmark);
        console.log(bookmarkArr);
    }, [bookmark]);

    // update read time 
    const [mins, setMins] = useState(0);
    useEffect(() => {
        if (bookmark.length > 0) {
            const minsArr = bookmark.map(bookmarkItem => bookmarkItem.readTime);
            const minsNum = minsArr.reduce((a, b) => +a + +b);
            setMins(minsNum);
        }
    }, [bookmark]);

    return (
        <div className='blog-container'>
            <div className='blogs'>
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                        markAsRead={markAsRead}
                    ></Blog>)
                }
            </div>
            <div>
                <div className='marks'>
                    <div className="read-times">
                        <h3>Spent time on read : {mins} min</h3>
                    </div>
                    <div className="mark-items">
                        <h2>Bookmarked Blogs : {bookmark.length}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;