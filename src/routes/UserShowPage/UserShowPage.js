import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserShowList from 'components/UserShowList/UserShowList';
import NavBar from 'components/NavBar/NavBar';
import ShowApiService from 'services/show-api-service';
//import TokenService from 'services/token-service';
import SearchBar from 'components/SearchBar/SearchBar';
import UserContext from 'UserContext';

class UserShowPage extends Component {
  static contextType = UserContext;

  handleUserShowsState = () => {
    ShowApiService.getUserShows(this.context.user.user_id)
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
      .then(searchResults => {
        this.props.history.push({
          pathname: '/search',
          searchResults: searchResults,
          searchTerm: searchTerm
        });
      });
  };

  componentDidMount() {
    this.handleUserShowsState();
  }


  render() {
    return (
      <>
        <NavBar></NavBar>
        <SearchBar handleSearch={this.handleSearch}></SearchBar>
        <section className='UserShowPage'>
          <UserShowList shows={this.context.userShows} updateState={this.handleUserShowsState} />
          <Link to={'/search'}>Add more shows</Link>
        </section>
      </>
    );
  }
}


export default UserShowPage;