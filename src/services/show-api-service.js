import config from 'config';
import TokenService from 'services/token-service';

const ShowApiService = {
  searchShows(searchTerm) {
    return fetch(`${config.API_ENDPOINT}/show/search/${searchTerm}`, {
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
      .catch(err => console.log(err));
  },

  getShowDetails(trakt_id) {
    return fetch(`${config.API_ENDPOINT}/show/${trakt_id}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => {
      if (!res.ok)
        throw new Error('Unable to retrieve show details')
        return res.json()
    })
    .catch(err => console.log(err))
  },

  getUserShows() {
    return fetch(`${config.API_ENDPOINT}/lists`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => {
        if (!TokenService.tokenAccepted(res.status))
          return false
        if (!res.ok)
          throw new Error('Fetch user shows unsuccessful');
        return res.json();
      })
      .catch(err => console.log(err));
  },

  addShowToList(trakt_id, new_watch_status, updateState) {
    return fetch(`${config.API_ENDPOINT}/lists/`, {
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
        if (!res.ok)
          throw new Error('Adding show to list failed');
        return res.json().then(response => updateState(response.user_id));
      })
      .catch(err => console.log(err));
  },

  updateWatchStatus(trakt_id, new_watch_status, updateState) {
    return fetch(`${config.API_ENDPOINT}/lists/`, {
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
        return res.json().then(response => updateState(response.user_id));
      })
      .catch(err => console.log(err));
  }
};

export default ShowApiService;