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
    TokenService.clearAuthToken();
    this.context.setUser({});
    this.context.storeUserShows([]);
    this.context.redirectToLogin();
  };

  renderLoginButton() {
    return (
      <li>
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
      <li>
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
          <div><h1>showshare</h1></div>
        </Link>
        <nav>
          <ul>
            <li>
              <Link to='/search'>search</Link>
            </li>
            {user.username ? (<li>
              <Link to='/watchlist'>
                {user.username}'s watchlist
                  </Link>
            </li>) : null}
            {user
              ? this.renderLogoutButton(user)
              : this.renderLoginButton(user)}
          </ul>
        </nav>
      </header>
    );
  }

}

export default NavBar;