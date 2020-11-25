import React, { Component } from 'react';
import SearchBar from 'components/SearchBar/SearchBar.js';
import ShowList from 'components/ShowList/ShowList.js';
import ShowApiService from 'services/show-api-service';

class SearchPage extends Component {
  state = {
    searchResults: [],
    searchTerm: '',
  };



  handleSearch = searchTerm => {
    ShowApiService.searchShows(searchTerm)
    .then(searchResults => this.setState({ searchResults, searchTerm }))
  };

  render() {
    return (
      <>
        <SearchBar handleSearch={this.handleSearch} />
        <ShowList shows={this.state.searchResults} searchTerm={this.state.searchTerm} />
      </>
    );
  };
}

export default SearchPage;