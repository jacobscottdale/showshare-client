import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from 'routes/MainPage/MainPage';
import FindShow from 'components/FindShow/FindShow';
import LoginPage from 'routes/LoginPage/LoginPage';
import RegistrationPage from 'routes/RegistrationPage/RegistrationPage';
import AllProfiles from 'components/AllProfiles/AllProfiles';
import ShowPage from 'routes/ShowPage/ShowPage';
import Watched from 'components/Watched/Watched';
import Watchlist from 'components/Watchlist/Watchlist';
import 'components/App/App.css';


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
            exact path={'/sign-up'}
            component={RegistrationPage} />
          <Route
            exact path={'/find-show'}
            component={FindShow}
          />
          <Route
            exact path={'/all-profiles'}
            component={AllProfiles}
          />
          <Route
            exact path={'/shows/:showSlug'}
            render={props => (
              <ShowPage
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
