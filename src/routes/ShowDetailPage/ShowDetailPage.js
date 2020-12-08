import React, { Component } from 'react';
import AddButton from 'components/AddButton/AddButton';
import NavBar from 'components/NavBar/NavBar';
import ShowApiService from 'services/show-api-service';
import UserContext from 'UserContext';
import 'routes/ShowDetailPage/ShowDetailPage.css';

class ShowDetailPage extends Component {
  state = {
    show: {},
    watch_status: ''
  };

  static contextType = UserContext;

  updateShowState = () => {
    ShowApiService.getShowDetails(this.props.match.params.trakt_id)
      .then(show => {
        if (this.context.user.user_id) {
          ShowApiService.getUserShows()
            .then(userShows => {
              this.context.storeUserShows(userShows);
              const showInList = userShows.find(userShow => userShow.trakt_id === show.trakt_id);
              if (showInList) {
                this.setState({
                  show,
                  watch_status: showInList.watch_status
                });
              } else {
                this.setState({
                  show,
                  watch_status: ''
                });
              }
            });
        } else {
          this.setState({
            show,
            watch_status: ''
          });
        }
      });
  };

  componentDidMount() {
    this.updateShowState();
  }

  renderPoster() {
    const { tmdb_image_path, slug } = this.state.show;
    if (tmdb_image_path === 'false' || !tmdb_image_path) {
      return null;
    } else {
      return (
        <img className='show_poster' src={`https://image.tmdb.org/t/p/w185${tmdb_image_path}`} alt={slug + '-poster'} />
      );
    }
  }

  render() {
    // trakt_id, slug
    const { trakt_id, aired_episodes, network, title, overview, status, year, imdb_id } = this.state.show;
    const imdbLink = `https://www.imdb.com/title/${imdb_id}/`;

    return (
      <>
        <NavBar history={this.props.history} />
        <section className='Show_Detail_Page'>
          <div className='poster_container'>
            {this.renderPoster()}
            <div className='watch_show_buttons'>
              <AddButton
                watch_status={this.state.watch_status}
                trakt_id={trakt_id}
                updateState={this.updateShowState}
              />
            </div>
          </div>
          <div className='Show_Detail'>
            <div className='title_container'>
              <h3>{title} <span className='year'>({year})</span></h3>

            </div>


            <div className='show_overview'>
              <p>{overview}</p>
              <div className='show_info'>
                <p>Network: {network}</p>
                <p>Status: {status}</p>
                <p>Aired episodes: {aired_episodes}</p>
                <a href={imdbLink} target="_blank" rel="noopener noreferrer">IMDB</a>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };
}

export default ShowDetailPage;