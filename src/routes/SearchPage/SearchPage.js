import React, { Component } from 'react';
import SearchBar from 'components/SearchBar/SearchBar.js';
import ShowList from 'components/ShowList/ShowList.js';
import NavBar from 'components/NavBar/NavBar';
import ShowApiService from 'services/show-api-service';
import UserContext from 'UserContext';

// Logged in users can add shows from directly from the SearchPage view to their watchlists

class SearchPage extends Component {
  state = {
    searchResults: this.props.location.searchResults || [],
    searchTerm: this.props.location.searchTerm || '',
  };

  static contextType = UserContext;

  updateUserShowsState = () => {
    ShowApiService.getUserShows()
      .then(userShows => {
        if (userShows) {
          this.context.storeUserShows(userShows);
        } else {
          this.props.history.push('/login');
        }
      });
  };

  handleSearch = searchTerm => {
    ShowApiService.searchShows(searchTerm)
      .then(searchResults => this.setState({ searchResults, searchTerm }))
      
  };

  render() {
    return (
      <>
        <NavBar history={this.props.history} />
        <section className='SearchPage'>
          <SearchBar handleSearch={this.handleSearch} />
          <ShowList shows={this.state.searchResults} searchTerm={this.state.searchTerm} updateState={this.updateUserShowsState} />
        </section>
      </>
    );
  };
}

export default SearchPage;