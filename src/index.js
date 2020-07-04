import ReactDOM from "react-dom";
import React from "react";
import App from "./components/app/app.jsx";
import Films from "./mocks/films.js";

const init = () => {
  const PromoFilm = {
    TITLE: `The Grand Budapest Hotel`,
    GENRE: `Drama`,
    YEAR: `2014`
  };

  ReactDOM.render(
      <App
        promoTitle={PromoFilm.TITLE}
        promoGenre={PromoFilm.GENRE}
        promoYear={PromoFilm.YEAR}
        films={Films}
        onTitleClick={() => {}}
      />,
      document.querySelector(`#root`)
  );
};

init();
