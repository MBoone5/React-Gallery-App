import React, { Component } from 'react';
import Nav from './Nav';
import Search from './Search';
import PhotoContainer from './PhotoContainer';
import apiKey from '../config';

// to make a search request, interpolate this string with any attached parameters
const photoSearch = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}`;

class App extends Component {
  render() {
    return (
      <>
        <Search />
        <Nav />
        <PhotoContainer />
      </>
    );
  }
}

export default App;
