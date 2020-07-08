import React from 'react';
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";
import {BrowserRouter} from 'react-router-dom';

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

  const main = mount(
      <BrowserRouter>
        <Main
          promoTitle={`badMovie`}
          promoGenre={`horror`}
          promoYear={`2021`}
          films={mockFilms}
          onTitleClick={onTitleClick}
        />
      </BrowserRouter>
  );

  const filmTitles = main.find(`a.small-movie-card__link`);

  filmTitles.simulate(`click`, {preventDefault() { }});
  expect(onTitleClick).toHaveBeenCalledTimes(1);
});
