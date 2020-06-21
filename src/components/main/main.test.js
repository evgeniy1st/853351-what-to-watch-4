import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

it(`render Main`, () => {
  const mockFilms = [
    {
      title: `Fantastic Beasts: The Crimes of Grindelwald`,
      image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
    },
    {
      title: `Fantastic Beasts: The Crimes of Grindelwald`,
      image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
    }
  ];

  const tree = renderer
  .create(<Main
    promoTitle={`goodMovie`}
    promoGenre={`comedy`}
    promoYear={2020}
    films={mockFilms}
  />)
  .toJSON;

  expect(tree).toMatchSnapshot();
});
