import React, { useState, useEffect } from 'react'

import './NavBar.styles.css'

function NavBar() {

    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        window.scrollY > 100 ? handleShow(true) : handleShow(false);
    };

    useEffect(() => {
        window.addEventListener("scroll",transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar);
    }, []);

    return (
        <div className='navBar'>
            <div className={`nav ${show && 'nav_black'}`}>
                <div className="nav__contents">
                    <img
                        className='nav_logo'
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
                        alt=""
                    />
                    <img
                        className='nav_avatar'
                        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}

export default NavBar;
