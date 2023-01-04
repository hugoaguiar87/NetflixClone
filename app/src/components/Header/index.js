import { useState } from 'react';
import './style.css'

const Header = ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className='header--logo'>
                <a href='/'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' alt='logo'/> 
                </a>
            </div>

            <div className='header--user'>
                <a href='/'>
                    <img src='https://obtainable-cabbage.surge.sh/static/media/logouser.6cd63fc3d72f015a2ebf.png' alt='user'/>
                </a>
            </div>
        </header>
    )
}

export default Header;