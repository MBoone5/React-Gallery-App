// dependencies
import React from 'react';
import PropTypes from 'prop-types';

// stateless component for individual image results
const Image = props => {
  return(
    <li>
      <img src={props.url} alt="" />
    </li>
  );
};

// prop validaiton
Image.propTypes = {
  url: PropTypes.string
};

export default Image;