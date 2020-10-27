import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import MainPage from 'MainPage/MainPage';
import FindShow from 'FindShow/FindShow';
import LogIn from 'LogIn/LogIn';
import SignUp from 'SignUp/SignUp';
import AllProfiles from 'AllProfiles/AllProfiles';
import ShowPage from 'ShowPage/ShowPage';
import Watched from 'Watched/Watched';
import Watchlist from 'Watchlist/Watchlist';
import 'App.css';


class App extends Component {


  render() {
    return (
      <main className='App'>
        <Route
          exact path='/log-in'
          component={LogIn} />
        <Route
          exact path='/sign-up'
          component={SignUp} />
        <Route
          exact path='/find-show'
          component={FindShow}
        />
        <Route
          exact path='/'
          component={MainPage}
        />
        <Route
          exact path='/all-profiles'
          component={AllProfiles}
        />
        <Route
          exact path='/shows/:showSlug'
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
      </main>
    );
  }

}

export default withRouter(App);
