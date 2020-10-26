import React from 'react';
import { Link } from 'react-router-dom';

function LogIn(props) {
  return (
    <>
      <form id='LogIn-Form'>
        <label for='username'>Username:</label>
        <input id='username' name='username' type='text' /><br/>
        <label for='password'>Password:</label>
        <input id='password' name='password' type='text' /><br/>
        <button type='submit'>Log In</button>
      </form>
      <p>Or make a <Link to='/sign-up' >New Account</Link></p>
    </>
  );
}

export default LogIn;