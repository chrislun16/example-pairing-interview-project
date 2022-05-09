import React from 'react';

import './Link.css';


/**
 * A link for navigation between screens
 * Used primarily as a way to provide consistent behavior and styling
 * @param {{ to: string; setRoute: function, children: ReactChildren }} props
 */
const Link = ({ to, setRoute, children }) => {
  const goToRoute = () => {
    setRoute(to)
  };

  return <div className="link" onClick={goToRoute}>{children}</div>;
};

export default Link;
