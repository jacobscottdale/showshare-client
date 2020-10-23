import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import FindShow from './FindShow/FindShow';


class App extends Component {




  render() {
    return (
      <main className='App'>
        <h1>showshare</h1>
        <Route
          exact path='/find-show'
          component={FindShow}
        />
        <Route
          exact path='/'
          component={MainPage}
        />
      </main>
    );
  }

}

export default App;
