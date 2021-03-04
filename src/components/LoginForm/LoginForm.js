import React, { Component } from 'react';
import AuthApiService from 'services/auth-api-service';
import TokenService from 'services/token-service';
import { Link } from 'react-router-dom';
import 'components/LoginForm/LoginForm.css';

class LoginForm extends Component {
  state = {
    error: ''
  };

  static defaultProps = {
    onLoginSuccess: () => { }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ error: '' });
    const { username, password } = e.target;

    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then(res => {
        username.value = '';
        password.value = '';
        TokenService.saveAuthToken(res.authToken);
        this.props.onLoginSuccess();
      })
      .catch(res => {
        password.value = ''
        this.setState({ error: res.error });
      });

  };

  render() {
    return (
      <>
        <form className='LogInForm' onSubmit={this.handleSubmit}>
          <label htmlFor='username' >Username:</label>
          <input
            id='username'
            name='username'
            type='text'
            autoComplete='username'
            required /><br />
          <label htmlFor='password'>Password:</label>
          <input
            id='password'
            name='password'
            type='password'
            autoComplete='current-password'
            required /><br />
          <button type='submit'>
            Log In
          </button><br />
          <span className='form-error'>{this.state.error}</span>
        </form>
        <p>Or make a <Link to='/register' >New Account</Link></p>
      </>
    );
  }

}

export default LoginForm;