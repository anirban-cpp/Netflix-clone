import React from 'react'
import { useSelector } from 'react-redux';

import Navbar from '../../components/NavBar/NavBar.component';
import Plans from '../../components/Plans/Plans.component';
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
                            <h3>Plans</h3>
                            <h3 style={{color: 'rgb(204, 203, 203)'}}>Renewal date:</h3>
                            <Plans/>
                            <button className='profileScreen_signOut' onClick={() => auth.signOut()}>Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile
