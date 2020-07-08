import React from "react";
import renderer from "react-test-renderer";
import ListOfFilmCards from "./list-of-film-cards.jsx";
import {BrowserRouter} from "react-router-dom";

it(`render ListOfFilmCards`, () => {
  const mockFilms = [
    {
      title: `Fantastic Beasts: The Crimes of Grindelwald`,
      image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
    },
    {
      title: `Fantastic Beasts: The Crimes of Grindelwald2`,
      image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
    }
  ];

  const tree = renderer
    .create(<BrowserRouter>
      <ListOfFilmCards
        films={mockFilms}
        onTitleClick={() => { }}
      />
    </BrowserRouter>)
    .toJSON;

  expect(tree).toMatchSnapshot();
});
