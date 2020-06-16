import ReactDOM from "react-dom";
import React from "react";
import App from "./components/app.jsx";

const init = () => {
  const PromoFilm = {
    TITLE: `The Grand Budapest Hotel`,
    GENRE: `Drama`,
    YEAR: `2014`
  };

  ReactDOM.render(
      <App
        title={PromoFilm.TITLE}
        genre={PromoFilm.GENRE}
        year={PromoFilm.YEAR}
      />,
      document.querySelector(`#root`)
  );
};

init();
