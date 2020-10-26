import React from 'react';
import { Link } from 'react-router-dom';

function SignUp(props) {
  return (
    <>
      <form id='SignUp-Form'>
        <label for='fname'>First Name:</label>
        <input id='fname' name='fname' type='text' /><br/>
        <label for='lname'>Last Name:</label>
        <input id='lname' name='lname' type='text' /><br/>
        <label for='email'>Email:</label>
        <input id='email' name='email' type='text' /><br/>
        <label for='password'>Password:</label>
        <input id='password' name='password' type='text' /><br/>
        <button type='submit'>Log In</button>
      </form>
      <p>Or log in to <Link to='/log-in'>An Existing Account</Link></p>
    </>
  );
}

export default SignUp;