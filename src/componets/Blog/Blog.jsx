import React from 'react';
import './Blog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

const Blog = (props) => {
    const { title, coverImg, authorName, authorImg, readTime, published } = props.blog;
    return (
        <div className='blog'>
            <img src={coverImg} alt="" />
            <div className='blog-info'>
                <div className='blog-header'>
                    <div className='flex'>
                        <div className='user-img'>
                            <img src={authorImg} alt="" />
                        </div>
                        <div className="name-date">
                            <h5>{authorName}</h5>
                            <p><small className='gray'>{published}</small></p>
                        </div>
                    </div>
                    <div className='flex gray'>
                        <p><small>{readTime}</small> min read</p>
                        <button className='bookmark' onClick={() => { props.funcBookmark(props.blog) }}><FontAwesomeIcon className='gray' icon={faBookmark} /></button>
                    </div>
                </div>
                <h2>{title}</h2>
                <p><small className='gray'>#beginners</small> <small className='gray'>#programming</small></p>
                <p onClick={() => props.markAsRead(props.blog)}><a href='#'>Mark as read</a></p>
            </div>
        </div>
    );
};

export default Blog;