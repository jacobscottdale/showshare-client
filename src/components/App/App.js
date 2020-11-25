import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from 'routes/MainPage/MainPage';
import SearchPage from 'routes/SearchPage/SearchPage';
import LoginPage from 'routes/LoginPage/LoginPage';
import RegistrationPage from 'routes/RegistrationPage/RegistrationPage';
import UserShowPage from 'routes/UserShowPage/UserShowPage';
import ShowDetailPage from 'routes/ShowDetailPage/ShowDetailPage';
import PrivateRoute from 'components/Utils/PrivateRoute';
import PublicOnlyRoute from 'components/Utils/PublicOnlyRoute';



class App extends Component {
  render() {
    return (
      <main className='App'>
        <Switch>

          <Route
            exact path={'/'}
            component={MainPage}
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

        </Switch>
      </main>
    );
  }
}

export default App;
