import React from "react";
import renderer from "react-test-renderer";
import SmallFilmCard from "./small-film-card.jsx";

it(`render SmallFilmCard`, () => {
  const mockFilm =
    {
      title: `Fantastic Beasts: The Crimes of Grindelwald`,
      image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
    };

  const tree = renderer
    .create(<SmallFilmCard
      key={mockFilm.title}
      film={mockFilm}
      onTitleClick={() => {}}
      onCardHover={() => {}}
    />)
    .toJSON;

  expect(tree).toMatchSnapshot();
});
