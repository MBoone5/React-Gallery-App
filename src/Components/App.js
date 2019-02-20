import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// components
import Nav from './Nav';
import Search from './Search';
import PhotoContainer from './PhotoContainer';

// data fetching
import axios from 'axios';
import apiKey from '../config';

// to make a search request, interpolate this string with any attached parameters
const photoSearch = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}`;

class App extends Component {

  state = {
    images: []
  };

  imageRequest(content = 'dogs') {
    axios.get(`${photoSearch}&text=${content}`)
      .then(function (response) {
        // handle success
        this.setState({images: response.data});
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  componentDidMount() {
    this.imageRequest();
  }

  render() {
    return (
      <BrowserRouter>
        <Route path='/' render=
          {() => 
            <div className='container'>
              <Search />
              <Nav />
              <PhotoContainer data={this.state.images} />
            </div>
          } 
        />
      </BrowserRouter>
    );
  }
}

export default App;
