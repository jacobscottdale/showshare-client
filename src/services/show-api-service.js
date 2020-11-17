import config from 'config';

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
          throw new Error('Search API unsuccessful')
        return res.json()
      });
  },

};

export default ShowApiService;