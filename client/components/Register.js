import React, { useState } from 'react';
import axios from 'axios';

import Link from './Link.js';


/**
 * Register screen
 * Renders and manages state for a form which allows the user to create an account
 * @param {{ setLoggedInUser: function, setRoute: function}} props
 */
const Register = ({ setLoggedInUser, setRoute }) => {
  const [username, setUsername] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (username.length === 0) {
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/user', { username });
      setLoggedInUser(response.data.user);
      setRoute('profile');
    } catch (error) {
      console.log('error registering user', error);
    }
  };

  return (
    <div className='register screen'>
      <h1>Register</h1>
      <form>
        <label>
          <div>Username</div>
          <input type="text" onChange={handleUsernameChange} value={username} />
        </label>
        <button type="submit" onClick={handleSubmit}>Register</button>
      </form>
      <div>
        Already have an account? <Link to='login' setRoute={setRoute}>Log in here.</Link>
      </div>
    </div>
  );
};

export default Register;
