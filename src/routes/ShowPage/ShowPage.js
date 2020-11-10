import React, { Component } from 'react';
import { profiles, tvShows } from 'store';

class ShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      watched: false,

    };
  }


  render() {
    const user = profiles.find(profile => profile.id === 1);
    const show = tvShows.find(show => this.props.match.params.showSlug === show.ids.slug);

    return (
      <>
        <h2>{show.title} ({show.year})</h2>
        <p>{user.watched.includes(show.ids.trakt) ? 'Watched' : user.toWatch.includes(show.ids.trakt) ? 'On Watchlist' : 'Not Watched'}</p>
      </>

    );
  }

}


export default ShowPage;