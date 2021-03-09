import config from 'config';
import TokenService from 'services/token-service';

const ShowApiService = {

  searchShows(searchTerm) {
    // Client gets search results from Showshare API which get's the results from Trakt API
    return fetch(`${config.REACT_APP_API_ENDPOINT}/show/search/${searchTerm}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => {
        if (!res.ok)
          throw new Error('Search API unsuccessful');
        return res.json();
      })
      .then(searchResults => {
        return searchResults.filter(show => (show.show.ids.imdb && show.show.ids.tmdb));
      })
      .catch(err => console.log(err));
  },

  getShowDetails(trakt_id) {
    return fetch(`${config.REACT_APP_API_ENDPOINT}/show/${trakt_id}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => {
        if (!res.ok)
          throw new Error('Unable to retrieve show details');
        return res.json();
      })
      .catch(err => console.log(err));
  },


  getUserShows() {
    // Returns all the shows the user on the AuthToken has saved in the database
    return fetch(`${config.REACT_APP_API_ENDPOINT}/lists`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => {
        if (!TokenService.tokenAccepted(res.status))
          return false;
        if (!res.ok)
          throw new Error('Fetch user shows unsuccessful');
        return res.json();
      })
      .catch(err => console.log('getUserShows not working', err));
  },


  addShowToList(trakt_id, new_watch_status, updateState) {
    // Adds a show's trakt_id and user's id to database as either 'watched' or 'want'
    return fetch(`${config.REACT_APP_API_ENDPOINT}/lists/`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        'trakt_id': trakt_id,
        'watch_status': new_watch_status
      })
    })
      .then(res => {
        if (!res.ok) {
          console.log(res);
          throw new Error('Adding show to list failed');
        } else

          return res.json();
      })
      .then(response => updateState(TokenService.userOnToken()))
      .catch(err => console.log(err));
  },


  removeShowFromList(trakt_id, updateState) {
    // Removes a show from the user's watchlist
    return fetch(`${config.REACT_APP_API_ENDPOINT}/lists/`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        'trakt_id': trakt_id
      })
    })
      .then(res => {
        if (!res.ok)
          throw new Error('Adding show to list failed');
        return updateState(TokenService.userOnToken());
      })
      .catch(err => console.log(err));
  },


  updateWatchStatus(trakt_id, new_watch_status, updateState) {
    // Toggles a show to either 'watch' or 'want' for user
    return fetch(`${config.REACT_APP_API_ENDPOINT}/lists/`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        'trakt_id': trakt_id,
        'watch_status': new_watch_status
      })
    })
      .then(res => {
        if (!res.ok)
          throw new Error('Watch status update failed');
        return res.json().then(response => updateState(TokenService.userOnToken()));
      })
      .catch(err => console.log(err));
  }
};

export default ShowApiService;