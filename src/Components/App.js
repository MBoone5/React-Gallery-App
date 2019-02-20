// basic modules
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// components
import Nav from './Nav';
import Search from './Search';
import Results from './Results';

// data fetching
import axios from 'axios';
import apiKey from '../config';

// to make a search request, interpolate this string with any attached parameters
const photoSearch = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&content_type=1&format=json&nojsoncallback=1`;

class App extends Component {
  // initializing state
  state = { 
    data: [],
    loading: true
  };

  // method to make flickr api request
  imageRequest(content = 'dogs') {
    axios.get(`${photoSearch}&tags=${content}`)
      .then((response) => {
        // handle success
        this.setState({ 
          data: response.data.photos.photo,
          loading: false
        });
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }

  // making default img request
  componentDidMount() {
    this.imageRequest();
  }

  // top level structure
  render() {
    return (
      <BrowserRouter>
        <Route path='/' render=
          {() => 
            <div className='container'>
              <Search />
              <Nav />
              <Results data={this.state.data} />
            </div>
          } 
        />
      </BrowserRouter>
    );
  }
}

// exporting for import into index.js
export default App;
