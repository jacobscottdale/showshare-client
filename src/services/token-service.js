import config from 'config';
import jwt from 'jsonwebtoken';

const TokenService = {
  saveAuthToken(token) {
    window.localStorage.setItem(config.REACT_APP_TOKEN_KEY, token);
  },

  getAuthToken() {
    return window.localStorage.getItem(config.REACT_APP_TOKEN_KEY);
  },

  clearAuthToken() {
    window.localStorage.removeItem(config.REACT_APP_TOKEN_KEY);
  },

  hasAuthToken() {
    return !!TokenService.getAuthToken();
  },

  tokenAccepted(responseStatus) {
    if (responseStatus === 401) {
      console.log('response is 401');
      this.clearAuthToken();
      return false;
    } else {
      return true;
    }
  },

  hasValidAuthToken() {
    // Need to figure out how to resolve the promise in PublicOnly/Private Routes
    return fetch(`${config.REACT_APP_API_ENDPOINT}/auth/verify-token`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => {
        return res.ok;
      });
  },

  userOnToken() {
    const token = this.getAuthToken();
    if (!token) {
      return false
    } else {
      const user = {
        user_id: jwt.decode(token).user_id,
        username: jwt.decode(token).sub
      };
      return user;
    }
      
    
  }
};

export default TokenService;