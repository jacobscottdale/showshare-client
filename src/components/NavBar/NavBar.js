import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from 'services/token-service';
import 'components/NavBar/NavBar.css';
import UserContext from 'UserContext';

class NavBar extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  };

  static contextType = UserContext;

  handleLogout = () => {
    // clear local storage and state-- redirect to login
    TokenService.clearAuthToken();
    this.context.setUser({});
    this.context.storeUserShows([]);
    this.context.redirectToLogin();
  };

  renderLoginButton() {
    return (
      <li className='nav-button'>
        <button
          onClick={() => this.props.history.push('/login')}
          className='log_button login'
        >
          log in
        </button>
      </li>
    );
  }

  renderLogoutButton() {
    return (
      <li className='nav-button'>
        <button
          onClick={() => this.handleLogout()}
          className='log_button logout'
        >
          log out
        </button>
      </li>
    );
  }

  render() {
    const user = TokenService.userOnToken();

    return (
      <header className='NavBar'>
        <Link to='/'>
          <div className='title-container'><h1>showshare</h1></div>
        </Link>
        <nav>
          <ul>
            <li className='nav-search'>
              <Link to='/search'>search</Link>
            </li>
            {
              // Will render a link to user's watchlist if there is a logged in user
              user.username ? (<li className='nav-user-watchlist'>
                <Link to='/watchlist'>
                  {user.username}'s watchlist
                  </Link>
              </li>) : null
            }
            {
              // Conditionally render a log in or a log out button
              user
                ? this.renderLogoutButton(user)
                : this.renderLoginButton(user)
            }
          </ul>
        </nav>
      </header>
    );
  }

}

export default NavBar;