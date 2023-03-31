import React from 'react';
import user from '../../assets/noman.jpg'
import './Header.css'

const Header = () => {
    return (
        <header>
            <nav>
                <h1>Knowledge Pro</h1>
                <figure>
                    <img src={user} alt="" />
                </figure>
            </nav>
        </header>
    );
};

export default Header;