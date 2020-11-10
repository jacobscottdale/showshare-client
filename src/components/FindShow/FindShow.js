import React, { Component } from 'react';
import SearchBar from 'components/SearchBar/SearchBar.js';
import ShowList from 'components/ShowList/ShowList.js';
import { tvShows } from 'store';

class FindShow extends Component {
  state = {
    showsResults: [],
  };

  handleSearch = searchTerm => {
    console.log('calling');
    const showsResults = tvShows.filter(show => show.title.toLowerCase().includes(searchTerm.toLowerCase())).map(show => show.ids.trakt);
    console.log(showsResults);
    this.setState({
      showsResults: showsResults
    });
  };

  render() {
    return (
      <>
        <SearchBar handleSearch={this.handleSearch} />
        <ShowList shows={this.state.showsResults} />
      </>
    );
  };
}

export default FindShow;