import React from 'react';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';

import './Footer.styles.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__container'>
                <div className='footer_1'>
                    <div className='footer_icons'>
                        <FacebookIcon style={{color: 'gray', marginRight: '13px'}}/>
                        <InstagramIcon style={{color: 'gray', marginRight: '13px'}}/>
                        <TwitterIcon style={{color: 'gray', marginRight: '13px'}}/>
                        <YouTubeIcon style={{color: 'gray'}}/>
                    </div>
                    <div style={{color: 'gray', fontSize: '0.75rem', marginBottom: '10px'}}>
                        <p>Audio and subtitles</p>
                    </div>
                    <div style={{color: 'gray', fontSize: '0.75rem', marginBottom: '10px'}}>
                        <p>Press</p>
                    </div>
                    <div style={{color: 'gray', fontSize: '0.75rem', marginBottom: '10px'}}>
                        <p>Privacy</p>
                    </div>
                    <div style={{color: 'gray', fontSize: '0.75rem', marginBottom: '10px'}}>
                        <p>Contact Us</p>
                    </div>
                    <div style={{border: '1px solid gray', color: 'gray', fontSize: '0.65rem', marginBottom: '10px', borderRadius: '5px'}}>
                        <p style={{padding: '4px'}}>Service Code</p>
                    </div>
                    <div style={{color: 'gray', fontSize: '0.75rem'}}>
                        <p>© 2021 Netflix-clone.Inc</p>
                    </div>
                </div>
                <div className='footer_1'>
                    <div style={{color: 'gray', fontSize: '0.75rem', marginBottom: '10px'}}>
                        <p>Descriptive Audio</p>
                    </div>
                    <div style={{color: 'gray', fontSize: '0.75rem', marginBottom: '10px'}}>
                        <p>Relationship with Investors</p>
                    </div>
                    <div style={{color: 'gray', fontSize: '0.75rem', marginBottom: '10px'}}>
                        <p>Legal notices</p>
                    </div>
                </div>
                <div className='footer_1'>
                    <div style={{color: 'gray', fontSize: '0.75rem', marginBottom: '10px'}}>
                        <p>Help center</p>
                    </div>
                    <div style={{color: 'gray', fontSize: '0.75rem', marginBottom: '10px'}}>
                        <p>Careers</p>
                    </div>
                    <div style={{color: 'gray', fontSize: '0.75rem', marginBottom: '10px'}}>
                        <p>Cookies preferences</p>
                    </div>
                </div>
                <div className='footer_1'>
                    <div style={{color: 'gray', fontSize: '0.75rem', marginBottom: '10px'}}>
                        <p>Gift Cards</p>
                    </div>
                    <div style={{color: 'gray', fontSize: '0.75rem', marginBottom: '10px'}}>
                        <p>Terms of use</p>
                    </div>
                    <div style={{color: 'gray', fontSize: '0.75rem', marginBottom: '10px'}}>
                        <p>Corporate information</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;