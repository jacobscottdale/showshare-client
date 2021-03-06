import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthApiService from 'services/auth-api-service';
import TokenService from 'services/token-service';
import UserContext from 'UserContext';
import 'components/RegistrationForm/RegistrationForm.css';

class RegistrationForm extends Component {
  state = {
    error: {
      field: '',
      message: ''
    }
  };

  static defaultProps = {
    onRegistrationSuccess: () => { }
  };

  static contextType = UserContext;

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      error: {
        field: '',
        message: ''
      }
    });
    const { first_name, last_name, username, password } = e.target;

    AuthApiService.postUser({
      first_name: first_name.value,
      last_name: last_name.value,
      username: username.value,
      password: password.value
    })
      .then(res => {
        first_name.value = '';
        last_name.value = '';
        username.value = '';
        password.value = '';
        TokenService.saveAuthToken(res.authToken);
        this.props.onRegistrationSuccess();
        this.context.setUser(TokenService.userOnToken());
      })
      .catch(err => {
        password.value = '';
        this.setState({ error: err.error });
      });
  };

  render() {
    // Form uses HTML validation as well as server-based validation
    return (
      <>
        <form className='RegistrationForm' onSubmit={this.handleSubmit}>
          <label htmlFor='first_name'>First Name:</label>
          <input
            id='first_name'
            name='first_name'
            type='text'
            autoComplete='given-name'
            required
          />
          <div className='form-error'>
            {this.state.error.field === 'first_name' ? 'Missing First Name' : null}
          </div>
          <label htmlFor='last_name'>Last Name:</label>
          <input
            id='last_name'
            name='last_name'
            type='text'
            autoComplete='family-name'
            required
          />
          <div className='form-error'>
            {this.state.error.field === 'last_name' ? 'Missing Last Name' : null}
          </div>
          <label htmlFor='username'>Username:</label>
          <input
            id='username'
            name='username'
            type='text'
            autoComplete='off'
            required
          />
          <div className='form-error'>
            {this.state.error.field === 'username' ? this.state.error.message : null}
          </div>
          <label htmlFor='password'>Password:</label>
          <input
            id='password'
            name='password'
            type='password'
            autoComplete='off'
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            required
          />
          <div className='form-error'>
            {this.state.error.field === 'password' ? this.state.error.message : null}
          </div>
          <button type='submit'>
            Register
          </button>
        </form>
        <p>Or log in to <Link to='/login'>An Existing Account</Link></p>
      </>
    );
  }

}

export default RegistrationForm;