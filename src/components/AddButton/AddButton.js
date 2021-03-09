import React, { Component } from 'react';
import ShowApiService from 'services/show-api-service';
import UserContext from 'UserContext'
import 'components/AddButton/AddButton.css'

class AddButton extends Component {

  static contextType = UserContext;

  // Event handler for conditionally rendered buttons
  addShowToList(watch_status) {
    ShowApiService.getShowDetails(this.props.trakt_id)
      .then(res => ShowApiService.addShowToList(this.props.trakt_id, watch_status, this.props.updateState));
  }

  renderButtons() {
    const { watch_status, trakt_id, updateState } = this.props;
    let watchShowButton;
    let removeShowButton;
    // If there is no 'watch_status', either no user is logged in, or the show is being rendered in SearchPage or ShowDetailPage (where the list of shows is not provided by 'userShows')

    // If user is logged in, pressing the button will add the show to the user's 'watchlist' as an unwatched show, else client will redirect to LoginPage
    if (!watch_status) {
      watchShowButton = (
        <button
          className='watchbutton add_watchlist'
          onClick={(this.context.user.username) ? (() => this.addShowToList('want')) : (() => this.context.redirectToLogin())}
        >
          Add to Watchlist
        </button>);

    } 
    
    // If user is logged in and the show is already in one of their lists, this button will render. If clicked, the show will be removed from whichever list
    else {
      removeShowButton = (
        <button
          className='watchbutton remove_watchlist'
          onClick={() => ShowApiService.removeShowFromList(trakt_id, updateState)}
        >
          Remove from List
        </button>);
    }

    // If show is in user's 'watched' list, this button will switch the show to their watchlist instead
    if (watch_status === 'watched') {
      watchShowButton = (
        <button
          className='watchbutton mark_unwatched'
          onClick={() => ShowApiService.updateWatchStatus(trakt_id, 'want', updateState)}>
          Mark Unwatched
        </button>);
    } 
    // If show is in user's watchlist, this button will switch the show to their 'watched' list instead
    else if (watch_status === 'want') {
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