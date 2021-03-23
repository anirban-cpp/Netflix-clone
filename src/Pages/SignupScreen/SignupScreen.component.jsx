import React, { useRef } from 'react'
import { auth, generateUserDocument, provider } from '../../firebase.utils/firebase';
import google_icon from '../../Assets/google_icon.png';

import './Signup.styles.css';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';

function SignupScreen() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const dispatch = useDispatch();

    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log('authUser ',authUser);
            alert('Account created');
            generateUserDocument(authUser);
        }).catch(error => {
            alert(error.message);
        });
    };

    const signin = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then( authUser => {
            console.log(authUser);
        }).catch( error => {
            alert(error.message);
        })
    }

    const googlesignin = e => {
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch(login({
                uid: result.user.uid,
                email: result.user.email
            }));
        }).catch(error => alert(error.message))
    }

    return (
        <div className="signupScreen">
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder='Email' type='email' required/>
                <input ref={passwordRef} placeholder='Password' type='password' required/>
                <button type="submit" onClick={signin}>Sign In</button>
                <div className='sign_up_google' onClick={googlesignin}>
                    <img src={google_icon} alt=""/>
                    <h4 style={{marginTop: '5px'}}>
                        <span className="signupScreen__gray">Login with Google</span>
                    </h4>
                </div>
                <h4>
                    <span className="signupScreen__gray">New to Netflix? </span> 
                    <span className="signupScreen__link" onClick={register}>Sign Up now.</span>
                </h4>
            </form>
        </div>
    );
}

export default SignupScreen;
