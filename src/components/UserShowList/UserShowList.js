import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserShowItem from 'components/UserShowItem/UserShowItem';
import 'components/UserShowList/UserShowList.css';
import UserContext from 'UserContext';

class UserShowList extends Component {
  static contextType = UserContext;

  render() {
    const watchedShows = this.context.userShows.map(show =>
      (show.watch_status === 'watched')
        ? (
          <li key={show.trakt_id}>
            <UserShowItem show={show} updateState={this.props.updateState} />
          </li>)
        : null)
        .filter(show => show);


    const unwatchedShows = this.context.userShows.map(show =>
      (show.watch_status === 'want')
        ? (
          <li key={show.trakt_id}>
            <UserShowItem show={show} updateState={this.props.updateState} />
          </li>)
        : null
    ).filter(show => show);

    return (
      <div className='TVShow_list'>

        <div className='TVShow_list_unwatched'>
          <h2>Unwatched Shows</h2>
          <ul>
            {unwatchedShows[0]
              ? unwatchedShows : (<Link to={'/search'}>Add more shows</Link>)}
          </ul>
        </div>
        <div className='TVShow_list_watched'>
          <h2>Watched Shows</h2>
          <ul>
            {watchedShows[0] ? watchedShows : (<Link to={'/search'}>Add more shows</Link>)}
          </ul>
        </div>
      </div>
    );
  }

}

export default UserShowList;