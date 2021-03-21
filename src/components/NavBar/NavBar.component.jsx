import React, { useState, useEffect } from 'react'

import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';

import './NavBar.styles.css'
import { IconButton } from '@material-ui/core';
import { useHistory } from 'react-router';

function NavBar() {

    const [show, handleShow] = useState(false);
    const history = useHistory();

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
                    <div  className="nav__left__contents">
                        <div>
                            <img
                                onClick={() => history.push('/')}
                                className='nav_logo'
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
                                alt=""
                            />
                        </div>
                        <div className="nav__contents__options" style={{paddingLeft: '120px'}}>
                            <div className='nav_option' ><h5>Home</h5></div>
                            <div className='nav_option' ><h5>Series</h5></div>
                            <div className='nav_option' ><h5>Movies</h5></div>
                            <div className='nav_option' ><h5>Popular News</h5></div>
                            <div className='nav_option' ><h5>My List</h5></div>
                        </div>
                    </div>
                    <div/>
                    <div className="nav__right__contents">
                        <div className='nav__contents__options' style={{paddingRight: '80px'}}>
                            <IconButton style={{padding: '0', minHeight: '0', minWidth: '0'}}>
                                <SearchIcon style={{color: 'white', marginRight: '10px'}}/>
                            </IconButton>
                            <IconButton style={{padding: '0', minHeight: '0', minWidth: '0'}}>
                                <NotificationsIcon style={{color: 'white'}}/>
                            </IconButton>
                        </div>
                        <div>
                            <img
                                onClick={() => history.push('/profile')}
                                className='nav_avatar'
                                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;
