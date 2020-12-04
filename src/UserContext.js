import React from 'react'

export default React.createContext({
  user: {},
  userShows: [],
  storeUserShows: () => {},
  redirectToLogin: () => {},
})