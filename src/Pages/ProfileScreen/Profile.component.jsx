import React from 'react'
import { useSelector } from 'react-redux';

import Navbar from '../../components/NavBar/NavBar.component';
import { selectUser } from '../../features/userSlice';
import { auth } from '../../firebase.utils/firebase';

import './Profile.styles.css';

function Profile() {

    const user = useSelector(selectUser);

    return (
        <div className="profileScreen">
            <Navbar/>
            <div className='profileScreen_body'>
                <h1>Edit Profile</h1>
                <div className="profileScreen_info">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                        alt=""        
                    />
                    <div className="profileScreen_details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen_plans">
                            <h3>Plans (Current Plan: premium)</h3>
                            <h3 style={{color: 'rgb(204, 203, 203)'}}>Renewal date:</h3>
                            <div className="profileScreen_plan">
                                <div className='profileScreen_plan_name'>
                                    <div>
                                        <h4>Netflix Standard</h4>
                                        <h4>1080p</h4>
                                    </div>
                                    <button className='subscribe_button'>Subscribe</button>
                                </div>
                                <div className='profileScreen_plan_name'>
                                    <div>
                                        <h4>Netflix Basic</h4>
                                        <h4>480p</h4>
                                    </div>
                                    <button className='subscribe_button'>Subscribe</button>
                                </div>
                                <div className='profileScreen_plan_name'>
                                    <div>
                                        <h4>Netflix Premium</h4>
                                        <h4>4K+HDR</h4>
                                    </div>
                                    <button className='current_button'>Current Package</button>
                                </div>
                            </div>
                            <button className='profileScreen_signOut' onClick={() => auth.signOut()}>Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile
