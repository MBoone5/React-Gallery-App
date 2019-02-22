// basic modules
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

// components
import Nav from './Nav';
import Search from './Search';
import Results from './Results';
import NoMatch from './NoMatch';

// data fetching
import axios from 'axios';
import apiKey from '../config';

// to make a search request, interpolate this string with any attached parameters
const photoSearch = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&content_type=1&format=json&nojsoncallback=1&sort=relevance&per_page=24`;

class App extends Component {
  // initializing state
  state = { 
    data: [],
    loading: true
  };

  // method to make flickr api request
  imageRequest = (query = 'Tesla') => {
    axios.get(`${photoSearch}&tags=${query}`)
      .then(response => {
        // handle success
        this.setState({
          data: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        // handle error
        // eslint-disable-next-line no-console
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
        <Switch>
          <Route path='(/|/Tesla|/Audi|/Porsche)' exact render=
            {() =>
              <div className='container'>
                <Link to="/Search">Search For Custom Images</Link>
                <Nav imageRequest={this.imageRequest} />
                <Results data={this.state.data} loading={this.state.loading} />
              </div>
            }
          />
          <Route path='/Search' exact render={
            () =>
              <div className='container'>
                <Search onSearch={this.imageRequest} />
                <Nav imageRequest={this.imageRequest} />
                <Results data={this.state.data} loading={this.state.loading} />
              </div>
          } />
          <Route component={NoMatch} />
        </Switch>
      </BrowserRouter>
    );
  }
}

// exporting for import into index.js
export default App;
