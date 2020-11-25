import React, { Component } from 'react';
import { Link } from 'react-router-dom'
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
    console.log('render')
    return (
      <section className='UserShowPage'>
        <UserShowList shows={this.state.userShows} updateState={this.handleUserShowsState}/>
        <Link to={'/search'}>Add more shows</Link>
      </section>
    );
  }
}


export default UserShowPage;