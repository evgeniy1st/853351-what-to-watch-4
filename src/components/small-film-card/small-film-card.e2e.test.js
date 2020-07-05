import React from 'react';
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SmallFilmCard from "./small-film-card.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`new film in state`, () => {
  const mockFilms = [
    {
      title: `Fantastic Beasts: The Crimes of Grindelwald`,
      image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
    }
  ];
  const testState = {
    hoverFilm: ``,
  };

  const onTitleClick = jest.fn();

  const filmCard = shallow(
      <SmallFilmCard
        key={mockFilms[0].title}
        film={mockFilms[0]}
        onTitleClick={onTitleClick}
        onCardHover={() => {
          testState.hoverFilm = mockFilms[0];
        }}
      />
  );

  const card = filmCard.find(`article`);
  card.simulate(`mouseover`, {preventDefault() { }});
  expect(testState.hoverFilm).toEqual(mockFilms[0]);
});
