import ReactDOM from "react-dom";
import React from "react";
import App from "./components/app/app.jsx";

const Films = [
  {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
  },

  {
    title: `Bohemian Rhapsody`,
    image: `img/bohemian-rhapsody.jpg`
  },

  {
    title: `Macbeth`,
    image: `img/macbeth.jpg`
  },

  {
    title: `Aviator`,
    image: `img/aviator.jpg`
  },

  {
    title: `We need to talk about Kevin`,
    image: `img/we-need-to-talk-about-kevin.jpg`
  },

  {
    title: `What We Do in the Shadows`,
    image: `img/what-we-do-in-the-shadows.jpg`
  },

  {
    title: `Revenant`,
    image: `img/revenant.jpg`
  },

  {
    title: `Johnny English`,
    image: `img/johnny-english.jpg`
  },

  {
    title: `Shutter Island`,
    image: `img/shutter-island.jpg`
  },

];

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
