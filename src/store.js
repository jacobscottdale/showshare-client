const tvShows = [
  {
    title: "Arrested Development",
    year: 1975,
    ids: {
      trakt: 1,
      slug: "game-of-thrones",
      tvdb: 121361,
      imdb: "tt0944947",
      tmdb: 1399
    }
  },
  {
    title: "Game of Thrones: The Sequel",
    year: 2050,
    ids: {
      trakt: 2,
      slug: "game-of-thrones",
      tvdb: 121361,
      imdb: "tt0944947",
      tmdb: 1399
    }
  },
  {
    title: "Game of Thrones",
    year: 2011,
    ids: {
      trakt: 3,
      slug: "game-of-thrones",
      tvdb: 121361,
      imdb: "tt0944947",
      tmdb: 1399
    }
  }
];

const profiles = [
  {
    id: 1,
    firstName: "Mary",
    lastName: "Smith",
    age: 35,
    watched: [ 1, 3 ],
    toWatch: [ 2 ]
  },
  {
    id: 2,
    firstName: "James",
    lastName: "Brouillard",
    age: 39,
    watched: [ 3 ],
    toWatch: [ 1, 2 ]
  },
  {
    id: 3,
    firstName: "Isabelle",
    lastName: "Reyes",
    age: 24,
    watched: [ 2, 3 ],
    toWatch: [ 1 ]
  },
  {
    id: 4,
    firstName: "Cory",
    lastName: "Brouillard",
    age: 57,
    watched: [ 1, 2 ],
    toWatch: [ 3 ]
  },
  {
    id: 5,
    firstName: "Vilda",
    lastName: "Svenson",
    age: 21,
    watched: [ 1, 3 ],
    toWatch: [ 2 ]
  }
]

export {tvShows, profiles};
