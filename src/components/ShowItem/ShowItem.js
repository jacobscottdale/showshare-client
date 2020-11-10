import React from 'react';
import { Link } from 'react-router-dom';
import WatchButton from 'components/WatchButton/WatchButton';
import { profiles } from 'store';

function ShowItem(props) {

  const user = profiles.find(profile => profile.id === 1);
  const button = user.watched.includes(props.show.ids.trakt)
    ? <div className='show_watch_button'><button id=''>Remove from Watched</button></div> : <div className='show_watch_button'><button>Mark Watched</button><button></button></div>

  return (
    <div className='TVShow_item'>
      <Link to={`/shows/${props.show.ids.slug}`}>
        {props.show.title} ({props.show.year})
      </Link>
      <WatchButton showId={props.show.ids.trakt}/>
    </div>

  );
}

export default ShowItem;