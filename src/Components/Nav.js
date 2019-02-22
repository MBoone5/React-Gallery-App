import React from 'react';
import NavBtn from './NavBtn';

const Nav = props => {
  const labels = ['Tesla', 'Audi', 'Porsche'];
  let counter = 0;
  const btnArray = labels.map( label =>
    <NavBtn imageRequest={props.imageRequest} label={label} key={counter+=1} />
  );

  return (
    <nav className="main-nav">
      <ul>
        {btnArray}
      </ul>
    </nav>
  );
};

export default Nav;