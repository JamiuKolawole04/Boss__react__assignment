import React from 'react';
import { Link } from 'react-router-dom'

import logo from '../../asset/logo1.svg';
const Header = () => {
    return (
        <header>
            <Link to="/">
                <img src={logo} alt="logo" className='header__logo' />
            </Link>
        </header>
    );
}

export default Header;