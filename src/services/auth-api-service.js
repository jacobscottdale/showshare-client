import config from 'config';

const AuthApiService = {
  // Log in with existing user
  postLogin({ username, password }) {
    return fetch(`${config.REACT_APP_API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ username, password })
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      );
  },

  // Register new user
  postUser(user) {
    return fetch(`${config.REACT_APP_API_ENDPOINT}/accounts`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user)
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      );
  },
};

export default AuthApiService;