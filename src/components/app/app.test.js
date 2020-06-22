import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

it(`render App`, () => {
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
    .create(<App
      promoTitle={`badMovie`}
      promoGenre={`horror`}
      promoYear={2021}
      films={mockFilms}
      onTitleClick={() => {}}
    />)
    .toJSON;

  expect(tree).toMatchSnapshot();
});
