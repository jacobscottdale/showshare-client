import React, { Component } from 'react';
import UserShowList from 'components/UserShowList/UserShowList';
import NavBar from 'components/NavBar/NavBar';
import ShowApiService from 'services/show-api-service';
import SearchBar from 'components/SearchBar/SearchBar';
import UserContext from 'UserContext';

// UserShowPage renders a 'watched' and 'unwatched' list based on users collected shows

class UserShowPage extends Component {
  static contextType = UserContext;

  updateUserShowsState = () => {
    ShowApiService.getUserShows()
      .then(userShows => {
        if (userShows) {
          this.context.storeUserShows(userShows);
        } else {
          this.context.redirectToLogin();
        }
      });
  };

  handleSearch = searchTerm => {
    ShowApiService.searchShows(searchTerm)
      .then(searchResults => {
        this.props.history.push({
          pathname: '/search',
          searchResults: searchResults,
          searchTerm: searchTerm
        });
      });
  };

  componentDidMount() {
    this.updateUserShowsState();
  }


  render() {
    return (
      <>
        <NavBar history={this.props.history} />
        <SearchBar handleSearch={this.handleSearch}></SearchBar>
        <section className='UserShowPage'>
          {!this.context.userShows[0]
            ?
            <p>Start by searching for a show to add to your watch list!</p>
            :
            <UserShowList updateState={this.updateUserShowsState} />
          }
        </section>
      </>
    );
  }
}


export default UserShowPage;