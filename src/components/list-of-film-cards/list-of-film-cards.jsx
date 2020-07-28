import React from "react";
import PropTypes from "prop-types";
import SmallFilmCard from "../small-film-card/small-film-card.jsx";
import withFilter from "../../hocs/with-filter/with-filter.jsx";

const ListOfFilmCards = (props) => {
  const {films, onTitleClick} = props;
  return (
    films.map((film) => {
      return (
        <SmallFilmCard
          key={film.title + Math.random()}
          film={film}
          onTitleClick={() => {
            onTitleClick(film);
          }}
          onCardHover={() => {}}
        />
      );
    })
  );
};

ListOfFilmCards.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      })
  ),
  onTitleClick: PropTypes.func.isRequired,
};

export default withFilter(ListOfFilmCards);
