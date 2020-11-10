import React, { Component } from 'react';
import AuthApiService from 'services/auth-api-service'
import { Link } from 'react-router-dom';

class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  handleSubmit = e => {
    e.preventDefault()
    const { username, password } = e.target

    AuthApiService.postLogin({

    })

    fetch('http://localhost:8000/api/auth/login')
      .then(response => response.json())
      .then(data => console.log(data))
    this.props.history.push('/')
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
        <p>Or make a <Link to='/sign-up' >New Account</Link></p>
      </>
    );
  }

}

export default LoginForm;