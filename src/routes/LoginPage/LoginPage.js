import React, { Component } from 'react';
import LoginForm from 'components/LoginForm/LoginForm';
import NavBar from 'components/NavBar/NavBar';
import 'routes/LoginPage/LoginPage.css'

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  };

  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || '/';
    history.push(destination);
  };

  render() {
    return (
      <>
        <NavBar history={this.props.history} />
        <section className='LoginPage'>
          <h2>Login</h2>
          <LoginForm
            onLoginSuccess={this.handleLoginSuccess}
          />
        </section>
      </>
    );
  }

}
