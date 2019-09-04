//Import components below:
import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import apiKey from "./config.js";
import Nav from "./components/Nav";
import Search from "./components/Search";
import Gallery from "./components/Gallery";
import NotFound from "./components/NotFound";

class App extends Component {
  state = {
    loading: true,
    searchTerm: "",
    results: [],
    hairstylesResults: [],
    gymnasticsResults: [],
    cruisesResults: []
  };

  // After navigation tabs are mounted get api requests
  componentDidMount() {
    this.performSearch("hairstyles");
    this.performSearch("gymnastics");
    this.performSearch("cruises");
  }

  performSearch = (query = "hairstyles") => {
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
        if (query === "hairstyles") {
          this.setState({
            hairstylesResults: responseData.photos.photo,
            loading: false
          });
        } else if (query === "gymnastics") {
          this.setState({
            gymnasticsResults: responseData.photos.photo,
            loading: false
          });
        } else if (query === "cruises") {
          this.setState({
            cruisesResults: responseData.photos.photo,
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
  };

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Search newSearch={this.performSearch} />
          <Nav onClick={this.performSearch} />
          {/*switch will redirect path*/}
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Redirect to="/hairstyles" />}
            />

            <Route
              exact
              path="/hairstyles"
              render={() =>
                this.state.loading ? (
                  <p>Loading...</p>
                ) : (
                  <Gallery
                    pictures={this.state.hairstylesResults}
                    query="hairstyles"
                  />
                )
              }
            />
            <Route
              exact
              path="/gymnastics"
              render={() =>
                this.state.loading ? (
                  <p>Loading...</p>
                ) : (
                  <Gallery
                    pictures={this.state.gymnasticsResults}
                    query="gymnastics"
                  />
                )
              }
            />
            <Route
              exact
              path="/cruises"
              render={() =>
                this.state.loading ? (
                  <p>Loading...</p>
                ) : (
                  <Gallery
                    pictures={this.state.cruisesResults}
                    query="cruises"
                  />
                )
              }
            />

            {/*search queries route */}
            <Route
              path="/search/:topic"
              render={() =>
                this.state.loading ? (
                  <p>Loading...</p>
                ) : (
                  <Gallery
                    pictures={this.state.results}
                    query={this.state.searchTerm}
                  />
                )
              }
            />

            {/* 404 error route */}
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
