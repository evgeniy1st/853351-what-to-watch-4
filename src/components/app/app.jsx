import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import React, {PureComponent} from "react";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import DetailsFilmCard from "../details-film-card/details-film-card.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currrentFilm: null,
    };
    this.onTitleClick = (film) => {
      this.setState({
        currrentFilm: film,
      });
    };
  }

  render() {
    const currrentFilm = this.state.currrentFilm;
    const {promoTitle, promoGenre, promoYear, films} = this.props;
    const onTitleClick = this.onTitleClick;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main
              promoTitle={promoTitle}
              promoGenre={promoGenre}
              promoYear={promoYear}
              films={films}
              onTitleClick={onTitleClick}
            />
          </Route>
          <Route exact path="/movie-page">
            if (currrentFilm !== null) {
              <DetailsFilmCard
                film={currrentFilm}
              />
            } else {
              <Redirect to="/"/>
            }
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  promoTitle: PropTypes.string.isRequired,
  promoGenre: PropTypes.string.isRequired,
  promoYear: PropTypes.string.isRequired,
  films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        bgImage: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        years: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        ratingStatus: PropTypes.string.isRequired,
        qntRatings: PropTypes.number.isRequired,
        director: PropTypes.string.isRequired,
        starring: PropTypes.array.isRequired
      })
  ),
};

export default App;
