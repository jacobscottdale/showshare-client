import React from 'react';
import ShowApiService from 'services/show-api-service'

function WatchButton(props) {

  const button = (props.watch_status === 'watched')
    ? <button
      onClick={() => ShowApiService.updateWatchStatus(props.trakt_id, 'want', props.updateState)}>
      Mark Unwatched
      </button>
    : <button
      onClick={() => ShowApiService.updateWatchStatus(props.trakt_id, 'watched', props.updateState)}>
      Mark Watched
      </button>;

  return button;
}

export default WatchButton;