import React from "react";
import PropTypes from "prop-types";

const SmallFilmCard = (props) => {
  const {film, onCardHover} = props;
  return (
    <React.Fragment>
      <article
        key={film.title}
        className="small-movie-card catalog__movies-card"
        onMouseOver={onCardHover}
      >
        <div className="small-movie-card__image">
          <img src={film.image} alt={film.title} width="280" height="175" />
        </div>
        <h3 className="small-movie-card__title">
          <a
            className="small-movie-card__link"
            href="movie-page.html"
          >
            {film.title}
          </a>
        </h3>
      </article>
    </React.Fragment>
  );
};

SmallFilmCard.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),
  onCardHover: PropTypes.func.isRequired,
};

export default SmallFilmCard;
