import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUp extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push('/');
  };

  render() {
    return (
      <>
        <form id='SignUp-Form'>
          <label htmlFor='fname'>First Name:</label>
          <input id='fname' name='fname' type='text' /><br />
          <label htmlFor='lname'>Last Name:</label>
          <input id='lname' name='lname' type='text' /><br />
          <label htmlFor='email'>Email:</label>
          <input id='email' name='email' type='text' /><br />
          <label htmlFor='password'>Password:</label>
          <input id='password' name='password' type='text' /><br />
          <button type='submit'>Log In</button>
        </form>
        <p>Or log in to <Link to='/log-in'>An Existing Account</Link></p>
      </>
    );
  }

}

export default SignUp;