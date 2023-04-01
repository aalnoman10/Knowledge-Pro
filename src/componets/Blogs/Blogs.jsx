import React from 'react';
import { useEffect, useState } from 'react'
import Blog from '../Blog/Blog';
import './Blogs.css'
import Bookmark from '../Bookmark/Bookmark';

// data loading
const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('pake.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    // update read time 
    const [markRead, setMarkRead] = useState([]);
    const markAsRead = (blog) => {
        const newMarkRead = [...markRead, blog];
        setMarkRead(newMarkRead);
    };

    const [mins, setMins] = useState(0);
    useEffect(() => {
        if (markRead.length > 0) {
            const minsArr = markRead.map(markReadItem => markReadItem.readTime);
            const minsNum = minsArr.reduce((a, b) => +a + +b);
            setMins(minsNum);
        }
    }, [markRead]);

    // update bookmark incomplete  
    const [bookmark, setBookmark] = useState([]);

    const funcBookmark = (blog) => {
        setBookmark([blog, ...bookmark]);
    }

    return (
        <div className='blog-container'>
            <div className='blogs'>
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                        markAsRead={markAsRead}
                        funcBookmark={funcBookmark}
                    ></Blog>)
                }
            </div>
            <div>
                <div className='marks'>
                    <div className="read-times">
                        <h3>Spent time on read : {mins} min</h3>
                    </div>
                    <div className="mark-items">
                        <h3>Bookmarked Blogs : {bookmark.length}</h3>
                        {
                            bookmark.map(bookmarkItem => <Bookmark
                                key={bookmarkItem.id}
                                title={bookmarkItem.title}
                            ></Bookmark>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;