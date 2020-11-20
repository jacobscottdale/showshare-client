import React from 'react';
import { Link } from 'react-router-dom';
import ShowApiService from 'services/show-api-service';

function UserShowItem(props) {
  return (
    <div className='TVShow_item'>
      <Link to={`/shows/${props.show.slug}`}>
        {props.show.title} ({props.show.year})
      </Link>
      {(props.show.watch_status === 'watched')
        ? <button onClick={() => ShowApiService.updateWatchStatus(props.show.trakt_id, 'want', props.updateState)}>Mark Unwatched</button>
        : <button onClick={() => ShowApiService.updateWatchStatus(props.show.trakt_id, 'watched', props.updateState)}>Mark Watched</button>}
      <button>Remove from List</button>
    </div>
  );
}

export default UserShowItem;