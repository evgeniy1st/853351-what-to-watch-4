import React from "react";
import PropTypes from "prop-types";

const TabOverview = (props) => {
  const {film} = props;
  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{film.rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{film.ratingStatus}</span>
          <span className="movie-rating__count">{film.qntRatings} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{film.description}</p>

        <p className="movie-card__director"><strong>Director: {film.director} </strong></p>

        <p className="movie-card__starring"><strong>Starring: {film.starring.join(`, `)} and other</strong></p>
      </div>
    </React.Fragment>
  );
};

TabOverview.propTypes = {
  film: PropTypes.object.isRequired,
};

export default TabOverview;
