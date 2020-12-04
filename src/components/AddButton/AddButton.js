import React, { Component } from 'react';
import ShowApiService from 'services/show-api-service';
import UserContext from 'UserContext'
import 'components/AddButton/AddButton.css'

class AddButton extends Component {

  static contextType = UserContext;

  addShowToList(watch_status) {
    ShowApiService.getShowDetails(this.props.trakt_id)
      .then(res => ShowApiService.addShowToList(this.props.trakt_id, watch_status, this.props.updateState));
  }

  renderButtons() {
    const { watch_status, trakt_id, updateState } = this.props;
    let watchShowButton;
    let removeShowButton;
    if (!watch_status) {
      watchShowButton = (
        <button
          className='watchbutton add_watchlist'
          onClick={(this.context.user.username) ? (() => this.addShowToList('want')) : (() => this.context.redirectToLogin())}
        >
          Add to Watchlist
        </button>);

    } else {
      removeShowButton = (
        <button
          className='watchbutton remove_watchlist'
          onClick={() => ShowApiService.removeShowFromList(trakt_id, updateState)}
        >
          Remove from List
        </button>);
    }

    if (watch_status === 'watched') {
      watchShowButton = (
        <button
          className='watchbutton mark_unwatched'
          onClick={() => ShowApiService.updateWatchStatus(trakt_id, 'want', updateState)}>
          Mark Unwatched
        </button>);
    } else if (watch_status === 'want') {
      watchShowButton = (
        <button
          className='watchbutton mark_watched'
          onClick={() => ShowApiService.updateWatchStatus(trakt_id, 'watched', updateState)}
        >
          Mark Watched
        </button>);
    }
    return <>{removeShowButton}{watchShowButton}</>;
  }

  render() {
    return this.renderButtons();
  }

}

export default AddButton;