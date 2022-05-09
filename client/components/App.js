import React, { useState } from 'react';

import Login from './Login.js';
import Register from './Register.js';
import Profile from './Profile.js';
import Welcome from './Welcome.js';

import './App.css';


/**
 * Our top-level React component
 * It is primarily responsible fow two things:
 * 1. Maintaining application state
 * 2. Determining which UI components should be rendered based on that state
 */
const App = () => {
  const [route, setRoute] = useState('welcome');
  const [loggedInUser, setLoggedInUser] = useState(null);

  const renderRoute = () => {
    if (route === 'login') return <Login setLoggedInUser={setLoggedInUser} setRoute={setRoute}/>;
    if (route === 'register') return <Register setLoggedInUser={setLoggedInUser} setRoute={setRoute} />;
    if (route === 'profile' && loggedInUser) return <Profile setLoggedInUser={setLoggedInUser} loggedInUser={loggedInUser} setRoute={setRoute} />;
    if (route === 'welcome') return <Welcome setRoute={setRoute} />;
  };

  return (
    <div className="app">
      {renderRoute()}
    </div>
  );
};

export default App;
