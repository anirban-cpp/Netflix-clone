import React, { useEffect } from 'react';

import HomeScreen from './Pages/HomeScreen/HomeScreen.component';
import Login from './Pages/LoginScreen/Login.component';

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import { auth } from './firebase.utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Profile from './Pages/ProfileScreen/Profile.component';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubsribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({  // dispatch the user as payload to login reducer
          uid: userAuth.uid,
          email: userAuth.email,
        }));
      } else {
        // Logged out
        dispatch(logout());
      }
    });

    return unsubsribe;
  }, [dispatch]);

  return (
      <div className="app">
        <Router>
          {
            !user ? (
              <Login/>
            ) : (
              <Switch>
                <Route exact path='/' component={HomeScreen} />
                <Route exact path='/profile' component={Profile}/>
              </Switch>
            )
          }
        </Router>
      </div>
  );
}

export default App;
