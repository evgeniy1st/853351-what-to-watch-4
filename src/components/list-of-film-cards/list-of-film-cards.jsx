import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import SmallFilmCard from "../small-film-card/small-film-card.jsx";

class ListOfFilmCards extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hoverFilm: ``,
    };
  }

  render() {
    const {films, onTitleClick} = this.props;
    return (
      films.map((film) => {
        return (
          <SmallFilmCard
            key={film.title + Math.random()}
            film={film}
            onTitleClick={() => {
              onTitleClick(film);
            }}
            onCardHover={() => {
              this.setState({
                hoverFilm: film,
              });
            }}
          />
        );
      })
    );
  }
}

ListOfFilmCards.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      })
  ),
  onTitleClick: PropTypes.func.isRequired,
};

export default ListOfFilmCards;
