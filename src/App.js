import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import apiKey from './config.js';

// Import components below:
import HeaderMenu from './components/HeaderMenu';
import Gallery from './components/Gallery';
import NotFound from './components/NotFound';
// properties of component
class App extends Component {
  state = {
    loading: true,
    searchTerm: "",
    results: [],
    flowersResults: [],
    roseFlowersResults: [],
    tulipFlowersResults: []
  };

  // After navigation tabs are mounted get api requests
  componentDidMount() {
    this.performSearch('flowers')
    this.performSearch('roseFlowers')
    this.performSearch('tulipFlowers')
  }

  
  performSearch = (query = 'flowers') => {
    this.setState({
      loading: true
    });
    //fetch url
    fetch( 
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&sort=relevance&format=json&nojsoncallback=1`
    )
      .then(response => response.json())
      .then(responseData => {
        // this will update the photos based on tab or query selected
        if (query === 'flowers') {
          this.setState({
            flowersResults: responseData.photos.photo,
            loading: false
          });
        } else if (query === 'rose flowers') {
          this.setState({
            tulipFlowrsResults: responseData.photos.photo,
            loading: false
          });
        } else if (query === 'tulip flowers') {
          this.setState({
            roseFlowersResults: responseData.photos.photo,
            loading: false
          });
        } else {
          this.setState({
            results: responseData.photos.photo,
            searchTerm: query,
            loading: false
          });
        }
      })
      .catch(error => console.log("Error fetching or parsing data", error));
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <HeaderMenu newSearch={this.performSearch} />
          {/*switch will redirect path*/}
          <Switch>
            
            <Route exact path="/" render={() =>
              <Redirect to='/flowers' />
            } />

            <Route exact path="/flowers" render={() =>
              (this.state.loading)
                ? <p>Loading...</p>
                : <Gallery pictures={this.state.flowersResults} query='flowers' />
            } />
            <Route exact path="/rose flowers" render={() =>
              (this.state.loading)
                ? <p>Loading...</p>
                : <Gallery pictures={this.state.roseFlowersResults} query='rose flowers' />
            } />
            <Route exact path="/tulip flowers" render={() =>
              (this.state.loading)
                ? <p>Loading...</p>
                : <Gallery pictures={this.state.tulipFlowersResults} query='tulip flowers' />
            } />

            {/*search queries route */}
            <Route path="/search/:topic" render={() =>
              (this.state.loading)
                ? <p>Loading...</p>
                : <Gallery pictures={this.state.results} query={this.state.searchTerm} />
            } />

            {/* 404 error route */}
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;