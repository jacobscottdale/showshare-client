import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthApiService from 'services/auth-api-service';

class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  }
  
  handleSubmit = e => {
    e.preventDefault();
    const { first_name, last_name, username, password } = e.target

    AuthApiService.postUser({
      first_name: first_name.value,
      last_name: last_name.value,
      username: username.value,
      password: password.value
    })
      .then(user => {
        first_name.value = ''
        last_name.value = ''
        username.value = ''
        password.value = ''
        this.props.onRegistrationSuccess()
      })
  };

  render() {
    return (
      <>
        <form className='RegistrationForm' onSubmit={this.handleSubmit}>
          <label htmlFor='first_name'>First Name:</label>
          <input id='first_name' name='first_name' type='text' /><br />
          <label htmlFor='last_name'>Last Name:</label>
          <input id='last_name' name='last_name' type='text' /><br />
          <label htmlFor='username'>Username:</label>
          <input id='username' name='username' type='text' /><br />
          <label htmlFor='password'>Password:</label>
          <input id='password' name='password' type='text' /><br />
          <button type='submit'>Register</button>
        </form>
        <p>Or log in to <Link to='/login'>An Existing Account</Link></p>
      </>
    );
  }

}

export default RegistrationForm;