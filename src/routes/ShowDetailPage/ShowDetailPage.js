import WatchButton from 'components/WatchButton/WatchButton';
import React, { Component } from 'react';
import ShowApiService from 'services/show-api-service';

class ShowDetailPage extends Component {
  state = {
    show: {},
    watch_status: ''
  }


  componentDidMount() {
    ShowApiService.getShowDetails(this.props.match.params.trakt_id)
      .then(show => {
        ShowApiService.getUserShows()
        .then(userShows => {
          console.log(userShows)
          const showInList = userShows.find(userShow => userShow.trakt_id === show.trakt_id)
          if (showInList) {
            this.setState({
              show,
              watch_status: showInList.watch_status
            })
          }
          this.setState({ 
            show
          })
        })
      })

  }

  render() {
    console.log(this.state)
    
    const { aired_episodes, network, trakt_id, title, slug, overview, status, year, imdb_id } = this.state.show

    const imdbLink = `https://www.imdb.com/title/${imdb_id}/`

    return (
      <section className='ShowDetailPage'>
        <h3>{title} ({year}){this.state.watch_status ? ` - ${this.state.watch_status}` : null}</h3>
        <WatchButton />
        <p>Network: {network}</p>
        <p>Status: {status}</p>
        <p>{overview}</p>
        <p>Aired episodes: {aired_episodes}</p>
        <a href={imdbLink} target="_blank" rel="noopener noreferrer">IMDB</a>
      </section>
    );
  };
}

export default ShowDetailPage;