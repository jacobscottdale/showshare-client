import React, { Component } from 'react';
import UserShowList from 'components/UserShowList/UserShowList';
import ShowApiService from 'services/show-api-service';

class UserShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userShows: [],
    };
  }

  handleUserShowsState = (user_id) => {
    ShowApiService.getUserShows(user_id)
      .then(userShows => {
        this.setState({
          userShows
        })
      })
  }

  componentDidMount() {
    this.handleUserShowsState(1)
  }


  render() {
    return (
      <section className='UserShowPage'>
        <UserShowList shows={this.state.userShows} updateState={this.handleUserShowsState}/>
      </section>
    );
  }
}


export default UserShowPage;