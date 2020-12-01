import React from 'react';
import UserShowItem from 'components/UserShowItem/UserShowItem';
import 'components/UserShowList/UserShowList.css'

function UserShowList(props) {
  const watchedShows = (props.shows)
    ? props.shows.map(show =>
      (show.watch_status === 'watched')
        ? (
          <li key={show.trakt_id}>
            <UserShowItem show={show} updateState={props.updateState} />
          </li>)
        : null

    )
    : null;

  const unwatchedShows = (props.shows)
    ? props.shows.map(show =>
      (show.watch_status === 'want')
        ? (
          <li key={show.trakt_id}>
            <UserShowItem show={show} updateState={props.updateState} />
          </li>)
        : null
    )
    : null;

  return (
    <div className='TVShow_list'>
      <div className='TVShow_list_watched'>
        <h3>Watched Shows</h3>
        <ul>
          {watchedShows}
        </ul>
      </div>
      <div className='TVShow_list_unwatched'>
        <h3>Unwatched Shows</h3>
        <ul>
          {unwatchedShows}
        </ul>
      </div>
    </div>
  );
}

export default UserShowList;