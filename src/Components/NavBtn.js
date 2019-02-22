import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NavBtn extends Component {
  handleClick = () => {
    this.props.imageRequest(this.props.label);
  };

  render() {
    return(
      <li><Link to={`/${this.props.label}`} onClick={this.handleClick}>{this.props.label}</Link></li>
    );
  }
}

export default NavBtn;