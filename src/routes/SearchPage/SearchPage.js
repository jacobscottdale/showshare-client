import React, { Component } from 'react';
import SearchBar from 'components/SearchBar/SearchBar.js';
import ShowList from 'components/ShowList/ShowList.js';
import config from 'config';
import { tvShows } from 'store';

class SearchPage extends Component {
  state = {
    showsResults: [],
  };

  handleSearch = searchTerm => {
    /*console.log('calling');
    const showsResults = tvShows.filter(show => show.title.toLowerCase().includes(searchTerm.toLowerCase())).map(show => show.ids.trakt);
    console.log(showsResults);
    this.setState({
      showsResults: showsResults
    });*/
    fetch(`${config.TRAKT_API_URL}/search/show?query=${searchTerm}`, {
      headers: {
        'Content-type': 'application/json',
        'trakt-api-key': config.TRAKT_API_KEY,
        'trakt-api-version': '2'
      }
    })
    .then(res => {
      if (!res.ok)
        throw new Error(res.status)
      return res.json()
    })
    .then(showsResults => {
      console.log(showsResults)
      this.setState({
        showsResults: showsResults
      })
    })
    .catch(err => console.log(err))
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

export default SearchPage;