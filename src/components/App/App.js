import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from 'routes/MainPage/MainPage';
import SearchPage from 'routes/SearchPage/SearchPage';
import LoginPage from 'routes/LoginPage/LoginPage';
import RegistrationPage from 'routes/RegistrationPage/RegistrationPage';
import AllProfiles from 'components/AllProfiles/AllProfiles';
import UserShowPage from 'routes/UserShowPage/UserShowPage';
import Watched from 'components/Watched/Watched';
import Watchlist from 'components/Watchlist/Watchlist';
import 'components/App/App.css';
import PrivateRoute from 'components/Utils/PrivateRoute'
import PublicOnlyRoute from 'components/Utils/PublicOnlyRoute'


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
            exact path={'/login'}
            component={LoginPage} />
          <Route
            exact path={'/register'}
            component={RegistrationPage} />
          <Route
            exact path={'/search'}
            component={SearchPage}
          />
          <Route
            exact path={'/all-profiles'}
            component={AllProfiles}
          />
          <PrivateRoute 
            path={'/private-route'}
            component={MainPage}
          />
          <PublicOnlyRoute
            path={'/public-route'}
            component={LoginPage}
          />
          <Route
            exact path={'/user/list'}
            render={props => (
              <UserShowPage
                {...props}
              />
            )}
          />
          <Route
            exact path='/watchlist'
            component={Watchlist}
          />
          <Route
            exact path='/watched'
            component={Watched}
          />
        </Switch>
      </main>
    );
  }
}

export default App;
