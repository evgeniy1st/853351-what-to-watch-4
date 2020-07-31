import React from "react";
import Comment from "../comment/comment.jsx";
import PropTypes from "prop-types";

const TabReviews = (props) => {
  const {film} = props;
  let filmReviews = film.reviews.slice();
  const remainder = filmReviews.length % 2;
  let firstCol = 0;
  let secondCol = 0;
  if (remainder !== 0) {
    firstCol = filmReviews.splice(1, (filmReviews.length - remainder) / 2 + remainder);
    secondCol = filmReviews;
  } else {
    firstCol = filmReviews.splice(1, filmReviews.length / 2);
    secondCol = filmReviews;
  }

  return (
    <React.Fragment>
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          {firstCol.map((it) => {
            return (
              <Comment
                comment={it}
                key={it.id}
                id={it.id}
              />
            );
          })}
        </div>
        <div className="movie-card__reviews-col">
          {secondCol.map((it) => {
            return (
              <Comment
                comment={it}
                key={it.id}
                id={it.id}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

TabReviews.propTypes = {
  film: PropTypes.object.isRequired,
};

export default TabReviews;
