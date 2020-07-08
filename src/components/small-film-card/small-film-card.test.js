import React from "react";
import renderer from "react-test-renderer";
import SmallFilmCard from "./small-film-card.jsx";
import {BrowserRouter} from "react-router-dom";

it(`render SmallFilmCard`, () => {
  const mockFilm =
    {
      title: `Fantastic Beasts: The Crimes of Grindelwald`,
      image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
    };

  const tree = renderer
    .create(<BrowserRouter>
      <SmallFilmCard
        key={mockFilm.title}
        film={mockFilm}
        onTitleClick={() => { }}
        onCardHover={() => { }}
      />
    </BrowserRouter>)
    .toJSON;

  expect(tree).toMatchSnapshot();
});
