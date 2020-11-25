import React from 'react';
import { Link } from 'react-router-dom';
import WatchButton from 'components/WatchButton/WatchButton';

function UserShowItem(props) {
  const { slug, title, year, watch_status, trakt_id } = props.show;

  return (
    <div className='TVShow_item'>
      <Link to={`/show/${trakt_id}`}>
        {title} ({year})
      </Link>
      <WatchButton
        watch_status={watch_status}
        trakt_id={trakt_id}
        updateState={props.updateState}
      />
      <button>Remove from List</button>
    </div>
  );
}

export default UserShowItem;