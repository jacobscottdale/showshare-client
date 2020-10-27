import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import FindShow from './FindShow/FindShow';
import LogIn from './LogIn/LogIn';
import SignUp from './SignUp/SignUp';
import AllProfiles from './AllProfiles/AllProfiles';


class App extends Component {


  render() {
    return (
      <main className='App'>
        <h1>showshare</h1>
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
      </main>
    );
  }

}

export default withRouter(App);
