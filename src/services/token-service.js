import config from 'config';

const TokenService = {
  saveAuthToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token);
  },

  getAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY);
  },

  clearAuthToken() {
    window.localStorage.removeItem(config.TOKEN_KEY);
  },

  hasAuthToken() {
    return !!TokenService.getAuthToken();
  },

  tokenAccepted(responseStatus) {
    if (responseStatus === 401) {
      this.clearAuthToken();
      return false;
    } else {
      return true;
    }
  },

  hasValidAuthToken() {
    // Need to figure out how to resolve the promise in PublicOnly/Private Routes
    return fetch(`${config.API_ENDPOINT}/auth/verify-token`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => {
        console.log(res.ok);
        return res.ok;
      });
  },
};

export default TokenService;