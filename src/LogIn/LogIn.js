import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LogIn extends Component {
  
  handleSubmit = e => {
    e.preventDefault()
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

export default LogIn;