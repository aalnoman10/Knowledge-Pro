import React from 'react';
import './Bookmark.css'
const Bookmark = ({ title }) => {
    return (
        <div className='bookmark-item'>
            <h3 className='title'>{title}</h3>
        </div>
    );
};

export default Bookmark;