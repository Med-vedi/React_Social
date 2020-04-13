import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img href="#" src={require('../Images/logo.png')} alt="logo" className={s.brand_logo}/>
        </header>
    );
}

export default Header;