import React from 'react';


/**
 * Profile screen
 * Displays the name of the logged in user and allows them to log out
 * @param {{ setRoute: function; setLoggedInUser: function; loggedInUser: object }} props
 */
const Profile = ({ setRoute, setLoggedInUser, loggedInUser }) => {
  const logout = () => {
    setLoggedInUser(null);
    setRoute('welcome');
  };

  return (
    <div className="profile screen">
      <h1>Profile</h1>
      <div>Logged in as {loggedInUser.username}</div>
      <button onClick={logout}>Log out</button>
    </div>
  );
};

export default Profile;
