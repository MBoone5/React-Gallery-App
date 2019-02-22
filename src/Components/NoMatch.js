// dependencies
import React from 'react';
import PropTypes from 'prop-types';

// stateless component to indicate no matched images
const NoMatch = ({ location }) => {
  return (
    <div>
      <h1>404 - Resource Not Found</h1>
      <p>There was no match for {location.pathname} </p>
    </div>
  );
};

// prop validaiton
NoMatch.propTypes = {
  location: PropTypes.string
};

export default NoMatch;