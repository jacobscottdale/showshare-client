import React, { Component } from 'react';
import SearchBar from 'components/SearchBar/SearchBar.js';
import ShowList from 'components/ShowList/ShowList.js';
import NavBar from 'components/NavBar/NavBar';
import 'components/SearchBar/SearchBar.css'
import ShowApiService from 'services/show-api-service';
import UserContext from 'UserContext'

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
          this.context.storeUserShows(userShows)
        } else {
          this.props.history.push('/login');
        }
      });
  };

  handleSearch = searchTerm => {
    ShowApiService.searchShows(searchTerm)
      .then(searchResults => this.setState({ searchResults, searchTerm }));
  };

  render() {
    return (
      <section className='SearchPage'>
        <NavBar history={this.props.history} />
        <SearchBar handleSearch={this.handleSearch} />
        <ShowList shows={this.state.searchResults} searchTerm={this.state.searchTerm} updateState={this.updateUserShowsState}/>
      </section>
    );
  };
}

export default SearchPage;