import React, { Component } from 'react';
import NavBar from 'components/NavBar/NavBar';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import 'routes/RegistrationPage/RegistrationPage.css'

class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => { }
    },
  };

  handleRegistrationSuccess = () => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
    return (
      <>
        <NavBar history={this.props.history} />
        <section className='RegistrationPage'>
          <h2>Register a New Account</h2>
          <RegistrationForm
            onRegistrationSuccess={this.handleRegistrationSuccess}
          />
        </section>
      </>

    );
  }
}

export default RegistrationPage;