import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends Component {
  
  handleSubmit = e => {
    e.preventDefault()
    fetch('http://localhost:8000/api/auth/login')
      .then(response => response.json())
      .then(data => console.log(data))
    this.props.history.push('/')
  }

  render() {
    return (
      <>
        <form id='LogIn-Form' onSubmit={this.handleSubmit}>
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