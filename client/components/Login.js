import React, { useState } from 'react';
import axios from 'axios';

import Link from './Link.js'

/**
 * Login screen
 * Renders and manages state for a form which allows the user to enter their username and log in
 * @param {{ setLoggedInUser: function, setRoute: function}} props
 */
const Login = ({ setLoggedInUser, setRoute }) => {
  const [username, setUsername] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(`/user/${username}`);
      setLoggedInUser(response.data.user);
      setRoute('profile');
    } catch (e) {
      console.log('error logging in', e);
    }
  };

  return (
    <div className="login screen">
      <h1>Log In</h1>
      <form>
        <label>
          <div>Username</div>
          <input type="text" onChange={handleUsernameChange} value={username} />
        </label>

        <button type="submit" onClick={handleSubmit}>Log In</button>
        <div>
          Don&apos;t have an account yet? <Link to="register" setRoute={setRoute}>Register here.</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
