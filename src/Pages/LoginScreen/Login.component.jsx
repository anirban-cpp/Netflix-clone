import React, { useState } from 'react'

import image from '../../Assets/background.jpg';
import SignupScreen from '../SignupScreen/SignupScreen.component';

import './Login.styles.css';

const Login = () => {

    const [signIn, setSignIn] = useState(false);

    return (
        <div className='loginScreen' style={{background: `url(${image})`}}>
            <div className="loginScreen__background">
                <img
                    className="loginScreen__logo"
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt=""
                />
                <button onClick={() => setSignIn(true)} className='loginScreen__button'>Sign In</button>
                <div className='loginScreen_gradient' />
                <div className="loginScreen__body">
                    {signIn ? (
                        <SignupScreen/>
                    ) : (
                        <>
                            <h1>Unlimited movies, TV shows and more.</h1>
                            <h2>Watch anywhere, Cancel anytime.</h2>
                            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                            <div className="loginScreen__input">
                                <form>
                                    <input type='email' placeholder='Email address'/>
                                    <button onClick={() => setSignIn(true)} className='loginScren__getStarted'>GET STARTED</button>
                                </form>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Login;
