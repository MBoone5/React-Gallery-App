import React from 'react';

const NoMatch = ({ location }) => {
  return (
    <div>
      <h1>404 - Resource Not Found</h1>
      <p>There was no match for {location.pathname} </p>
    </div>
  );
};

export default NoMatch;