import React from 'react';
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ListOfFilmCards from "../../components/list-of-film-cards/list-of-film-cards.jsx";
import {BrowserRouter} from 'react-router-dom';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`no filter for list of films`, () => {
  const films = [
    {
      title: `Bohemian Rhapsody`,
      image: ``,
      genre: `musical`,
    },

    {
      title: `Macbeth`,
      image: ``,
      genre: `drama`,
    },

    {
      title: `Aviator`,
      image: ``,
      genre: `comedy`,
    },

    {
      title: `What We Do in the Shadows`,
      image: ``,
      genre: `others`,
    },
  ];

  const desiredLength = films.length;

  const listFilms = mount(
      <BrowserRouter>
        <ListOfFilmCards
          films={films}
          onTitleClick={() => {}}
          isLikes={false}
        />
      </BrowserRouter>
  );

  const renderListFilms = listFilms.find(`article`);
  expect(renderListFilms.length).toBe(desiredLength);
});

it(`filter for list of films`, () => {
  const film = {
    title: `Bohemian Rhapsody`,
    image: ``,
    genre: `comedy`,
  };

  const films = [
    {
      title: `Bohemian Rhapsody`,
      image: ``,
      genre: `comedy`,
    },

    {
      title: `Macbeth`,
      image: ``,
      genre: `comedy`,
    },

    {
      title: `Aviator`,
      image: ``,
      genre: `comedy`,
    },

    {
      title: `What We Do in the Shadows`,
      image: ``,
      genre: `others`,
    },
  ];

  const desiredFilms = films.filter((it) => {
    return it.genre === film.genre && it.title !== film.title;
  }).splice(0, 4);
  const desiredLength = desiredFilms.length;

  const listFilms = mount(
      <BrowserRouter>
        <ListOfFilmCards
          films={films}
          onTitleClick={() => { }}
          isLikes={true}
          film={film}
        />
      </BrowserRouter>
  );

  const renderListFilms = listFilms.find(`.small-movie-card`);
  expect(renderListFilms.length).toBe(desiredLength);
});
