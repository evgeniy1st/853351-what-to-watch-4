import React, {PureComponent} from "react";
import PropTypes, {shape} from "prop-types";

const withFilter = (Component) => {

  return class FiltresFilms extends PureComponent {
    constructor(props) {
      super(props);
    }

    render() {
      let films = this.props.films;
      const {onTitleClick, isLikes, film} = this.props;

      if (isLikes) {
        films = films.filter((it) => {
          return it.genre === film.genre && it.title !== film.title;
        }).splice(0, 4);


      }

      return (
        <Component
          {...this.props}
          films={films}
          onTitleClick={onTitleClick}
        />
      );
    }
  };
};

withFilter.propTypes = {
  films: PropTypes.arrayOf(shape({
    genre: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })),
  onTitleClick: PropTypes.func.isRequired,
  isLikes: PropTypes.bool.isRequired,
  film: PropTypes.shape({
    genre: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })
};

export default withFilter;
