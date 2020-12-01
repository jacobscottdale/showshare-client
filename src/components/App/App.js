import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchPage from 'routes/SearchPage/SearchPage';
import LoginPage from 'routes/LoginPage/LoginPage';
import RegistrationPage from 'routes/RegistrationPage/RegistrationPage';
import UserShowPage from 'routes/UserShowPage/UserShowPage';
import ShowDetailPage from 'routes/ShowDetailPage/ShowDetailPage';
import PrivateRoute from 'components/Utils/PrivateRoute';
import PublicOnlyRoute from 'components/Utils/PublicOnlyRoute';
import TokenService from 'services/token-service';
import UserContext from 'UserContext';

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

  render() {
    const contextValue = {
      user: this.state.user,
      userShows: this.state.userShows,
      storeUserShows: this.storeUserShows,
    };

    return (
      <main className='App'>
        <Switch>
          <UserContext.Provider value={contextValue}>

            <PrivateRoute
              exact path={'/'}
              component={UserShowPage}
            />

            <Route
              exact path={'/show/:trakt_id'}
              component={ShowDetailPage}
            />

            <Route
              exact path={'/login'}
              component={LoginPage}
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
              path={'/public-route'}
              component={LoginPage}
            />

            <PrivateRoute
              exact path={'/user/list'}
              component={UserShowPage}
            />

          </UserContext.Provider>
        </Switch>
      </main>
    );
  }
}

export default App;
