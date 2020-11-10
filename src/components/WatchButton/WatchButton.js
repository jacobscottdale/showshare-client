import React from 'react';
import { profiles } from 'store';

function WatchButton(props) {

  const user = profiles.find(profile => profile.id === 1);
  const button = user.watched.includes(props.showId)
    ? (
      <div className='show_watch_button'>
        <button id='remove-watched'>Remove from Watched</button>
      </div>
    )
    : (
      <div className='show_watch_button'>
        <button id='add-watched'>Mark Watched</button>
        <button id='add-watchlist'>Add to WatchList</button>
      </div>
    );

  return button;
}

export default WatchButton;