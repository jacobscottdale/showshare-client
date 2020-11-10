import React, { Component } from 'react';
import AuthApiService from 'services/auth-api-service'
import TokenService from 'services/token-service'
import { Link } from 'react-router-dom';

class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  handleSubmit = e => {
    e.preventDefault()
    const { username, password } = e.target

    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then(res => {
        username.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)
        this.props.onLoginSuccess()
      })
      .catch(res => {
        console.log(res.error)
      })
  }

  render() {
    return (
      <>
        <form className='LogInForm' onSubmit={this.handleSubmit}>
          <label htmlFor='username'>Username:</label>
          <input id='username' name='username' type='text' /><br />
          <label htmlFor='password'>Password:</label>
          <input id='password' name='password' type='text' /><br />
          <button type='submit'>Log In</button>
        </form>
        <p>Or make a <Link to='/register' >New Account</Link></p>
      </>
    );
  }

}

export default LoginForm;