import React, { Component } from 'react';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';

class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    },
  }
  
  handleRegistrationSuccess = () => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
    return (
      <section className='RegistrationPage'>
        <h2>Register</h2>
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </section>
    );
  }
}

export default RegistrationPage;