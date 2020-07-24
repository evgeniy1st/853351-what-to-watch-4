import React from "react";
import renderer from "react-test-renderer";
import ListOfFilmCards from "./list-of-film-cards.jsx";
import {BrowserRouter} from "react-router-dom";

it(`render ListOfFilmCards`, () => {
  const mockFilms = [
    {
      title: `Fantastic Beasts: The Crimes of Grindelwald`,
      preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
    },
    {
      title: `Fantastic Beasts: The Crimes of Grindelwald2`,
      preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
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
