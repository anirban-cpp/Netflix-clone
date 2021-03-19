import React, { useEffect, useState } from 'react';

import HomeScreen from './Pages/HomeScreen/HomeScreen.component';
import Login from './Pages/LoginScreen/Login.component';

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import { auth } from './firebase.utils/firebase';

function App() {

  const user = null;

  useEffect(() => {
    const unsubsribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        console.log(userAuth);
      } else {
        // Logged out
      }
    });

    return unsubsribe;
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path='/' component={user ? HomeScreen : Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
