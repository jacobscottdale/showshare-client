import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import SearchPage from 'routes/SearchPage/SearchPage';
import LoginPage from 'routes/LoginPage/LoginPage';
import RegistrationPage from 'routes/RegistrationPage/RegistrationPage';
import UserShowPage from 'routes/UserShowPage/UserShowPage';
import ShowDetailPage from 'routes/ShowDetailPage/ShowDetailPage';
import PrivateRoute from 'components/Utils/PrivateRoute';
import PublicOnlyRoute from 'components/Utils/PublicOnlyRoute';
import TokenService from 'services/token-service';
import UserContext from 'UserContext';
import ShowApiService from 'services/show-api-service';
import MainPage from 'routes/MainPage/MainPage';

class App extends Component {
  state = {
    user: TokenService.userOnToken() || {},
    userShows: []
  };

  storeUserShows = userShows => {
    this.setState({
      userShows: userShows,
    });
  };

  redirectToLogin = () => {
    const { history } = this.props;
    if (history)
      history.push('login');
  };

  componentDidMount() {
    ShowApiService.getUserShows()
      .then(userShows => {
        if (userShows)
          this.storeUserShows(userShows);
      });
  }

  render() {
    const contextValue = {
      user: this.state.user,
      userShows: this.state.userShows,
      storeUserShows: this.storeUserShows,
      redirectToLogin: this.redirectToLogin,
    };

    return (
      <main className='App'>
        <Switch>
          <UserContext.Provider value={contextValue}>

            <PublicOnlyRoute
              exact path={'/'}
              component={MainPage}
            />

            <Route
              exact path={'/show/:trakt_id'}
              component={ShowDetailPage}
            />

            <Route
              exact path={'/register'}
              component={RegistrationPage}
            />

            <Route
              exact path={'/search'}
              component={SearchPage}
            />

            <PublicOnlyRoute
              path={'/login'}
              component={LoginPage}
            />

            <PrivateRoute
              exact path={'/watchlist'}
              component={UserShowPage}
            />

          </UserContext.Provider>
        </Switch>
      </main>
    );
  }
}

export default withRouter(App);
