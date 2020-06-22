import React from 'react';
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should title be pressed`, () => {
  const mockFilms = [
    {
      title: `Fantastic Beasts: The Crimes of Grindelwald`,
      image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
    }
  ];
  const onTitleClick = jest.fn();

  const main = shallow(
      <Main
        promoTitle={`badMovie`}
        promoGenre={`horror`}
        promoYear={2021}
        films={mockFilms}
        onTitleClick={onTitleClick}
      />
  );

  const filmTitles = main.find(`a.small-movie-card__link`);

  filmTitles.simulate(`click`, {preventDefault() { }});
  expect(onTitleClick).toHaveBeenCalledTimes(1);
});
