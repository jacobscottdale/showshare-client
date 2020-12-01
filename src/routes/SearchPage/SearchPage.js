import React, { Component } from 'react';
import SearchBar from 'components/SearchBar/SearchBar.js';
import ShowList from 'components/ShowList/ShowList.js';
import NavBar from 'components/NavBar/NavBar';
import ShowApiService from 'services/show-api-service';

class SearchPage extends Component {
  state = {
    searchResults: this.props.location.searchResults || [],
    searchTerm: this.props.location.searchTerm || '',
  };

  handleSearch = searchTerm => {
    ShowApiService.searchShows(searchTerm)
      .then(searchResults => this.setState({ searchResults, searchTerm }));
  };

  render() {
    return (
      <>
        <NavBar></NavBar>
        <SearchBar handleSearch={this.handleSearch} />
        <ShowList shows={this.state.searchResults} searchTerm={this.state.searchTerm} />
      </>
    );
  };
}

export default SearchPage;