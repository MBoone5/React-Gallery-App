// dependencies
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// stateful component for making search requests
class Search extends Component {
  // initializing state
  state = {
    query: '',
    toSearch: false
  }

  // updating the query string
  handleChange = e => {
    this.setState({query: e.target.value});
  }

  // handling the submit of the form
  handleSubmit = e => {
    e.preventDefault(); // stop default

    // calling the request function
    this.props.onSearch(this.state.query);

    this.form.reset(); // clearing the form
    this.setState({toSearch: true}); // updating the state for redirect to /Search
  }
  
  // rendering the content
  render() {
    // redirect
    if (this.state.toSearch === true) {
      this.setState({ toSearch: false });
      return <Redirect to="/Search" />;
    }

    // search form
    return (
      <form ref={(form) => this.form = form}className="search-form" onSubmit={this.handleSubmit}>
        <input type="search" name="search" placeholder="Search for anything..."  onChange={this.handleChange} required />
        <button type="submit" onClick={this.handleSubmit} className="search-button">
          <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </button>
      </form>
    );
  }
}

// prop validation
Search.propTypes = {
  onSearch: PropTypes.func
};

export default Search;