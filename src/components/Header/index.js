import React from 'react';

import logo from '../../asset/logo1.svg';
const Header = () => {
    return (
        <header>
            <img src={logo} alt="logo" className='header__logo' />
        </header>
    );
}

export default Header;