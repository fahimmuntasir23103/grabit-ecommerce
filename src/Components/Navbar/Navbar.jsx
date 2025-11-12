import React from 'react';
import HeaderTop from '../Shared/Header/HeaderTop';
import HeaderMiddle from '../Shared/Header/HeaderMiddle';
import HeaderBottom from '../Shared/Header/HeaderBottom';

const Navbar = () => {
    return (
        <div>
            <HeaderTop/>
            <HeaderMiddle/>
            <HeaderBottom/>
        </div>
    );
};

export default Navbar;