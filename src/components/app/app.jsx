import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import React from "react";

const App = (props) => {
  const {promoTitle, promoGenre, promoYear, films, onTitleClick} = props;

  return (
    <Main
      promoTitle={promoTitle}
      promoGenre={promoGenre}
      promoYear={promoYear}
      films={films}
      onTitleClick={onTitleClick}
    />
  );
};

App.propTypes = {
  promoTitle: PropTypes.string.isRequired,
  promoGenre: PropTypes.string.isRequired,
  promoYear: PropTypes.string.isRequired,
  films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      })
  ),
  onTitleClick: PropTypes.func.isRequired,
};

export default App;
