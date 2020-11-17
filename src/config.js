export default {
  API_ENDPOINT: process.env.API_ENDPOINT || 'http://localhost:8000/api',
  TOKEN_KEY: 'showshare-client-auth-token',
  TRAKT_API_KEY: process.env.TRAKT_API_KEY,
  TRAKT_API_URL: process.env.TRAKT_API_URL || 'https://api.trakt.tv'
}