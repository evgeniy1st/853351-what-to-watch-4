import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const SmallFilmCard = (props) => {
  const {film, onCardHover, onTitleClick} = props;
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
          <Link
            onClick={onTitleClick}
            className="small-movie-card__link"
            to="/movie-page"
          >
            {film.title}
          </Link>
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
  onTitleClick: PropTypes.func.isRequired,
};

export default SmallFilmCard;
