// dependencies
import React from 'react';
import PropTypes from 'prop-types';

// components
import NavBtn from './NavBtn';

// stateless Nav wrapper component
const Nav = props => {
  // labels for image buttons
  const labels = ['Tesla', 'Audi', 'Porsche'];

  // counter variable for key props
  let counter = 0;

  // creating the array of NavBtn(s)
  const btnArray = labels.map( label =>
    <NavBtn imageRequest={props.imageRequest} label={label} key={counter+=1} />
  );
  
  // rendering the NavBtns array
  return (
    <nav className="main-nav">
      <ul>
        {btnArray}
      </ul>
    </nav>
  );
};

// prop validation
Nav.propTypes = {
  imageRequest: PropTypes.func
};

export default Nav;