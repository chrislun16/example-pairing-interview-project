import React from 'react';
import Link from './Link.js';


/**
 * Welcome screen
 * Serves as the landing page for this application
 * Allows user to decide between logging in or registering
 * @param {{ setRoute: function }} props
 */
const Welcome = ({ setRoute }) => (
  <div className="welcome screen">
    <h1>Welcome</h1>
    <div>
      <Link to='login' setRoute={setRoute}>Log in</Link> or <Link to='register' setRoute={setRoute}>Register.</Link>
    </div>
  </div>
);


export default Welcome;
