const fetch = require('node-fetch')

const options = {
  headers : {
    'Content-type' : 'application/json',
    'trakt-api-key' : '',
    'trakt-api-version' : 2
  }
}

fetch(URL, options).....