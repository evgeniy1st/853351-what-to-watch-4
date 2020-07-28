import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import VideoPlayer from "../video-player/video-player.jsx";

const SmallFilmCard = (props) => {
  const {film, onTitleClick} = props;
  return (
    <React.Fragment>
      <article
        key={film.title}
        className="small-movie-card catalog__movies-card"
      >
        <VideoPlayer
          src={film.preview}
          poster={film.image}
        />


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
    preview: PropTypes.string.isRequired
  }),
  onCardHover: PropTypes.func.isRequired,
  onTitleClick: PropTypes.func.isRequired,
};

export default SmallFilmCard;

