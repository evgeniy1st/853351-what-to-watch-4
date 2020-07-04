import React from "react";
import renderer from "react-test-renderer";
import SmallFilmCard from "./small-film-card.jsx";

it(`render SmallFilmCard`, () => {
  const mockFilms = [
    {
      title: `Fantastic Beasts: The Crimes of Grindelwald`,
      image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
    }
  ];

  const tree = renderer
    .create(<SmallFilmCard
      key={mockFilms.title}
      film={mockFilms}
      onTitleClick={() => {}}
      onCardHover={() => {}}
    />)
    .toJSON;

  expect(tree).toMatchSnapshot();
});
