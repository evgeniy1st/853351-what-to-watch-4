import React from "react";
import renderer from "react-test-renderer";
import DetailsFilmCard from "./details-film-card.jsx";
import {BrowserRouter} from "react-router-dom";

it(`render DetailsFilmCard`, () => {
  const mockFilm =
  {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    bgImage: `img/bg-the-grand-budapest-hotel.jpg`,
    genre: `adventures`,
    years: `2018`,
    description: `Nostrud et anim do nisi aute proident sunt ad. Duis eiusmod esse magna proident. Culpa nostrud sunt Lorem irure nisi. Enim nostrud in proident quis quis et do et nostrud aute ad magna qui aliqua. Ea veniam aliqua consectetur mollit id. Esse ex Lorem exercitation minim minim exercitation ut dolore laborum amet mollit.
    Dolor consequat et ex sunt tempor id amet. Culpa deserunt ex ullamco occaecat exercitation deserunt consectetur tempor aute ea. Qui quis incididunt nisi adipisicing eiusmod deserunt. Duis et officia exercitation magna consectetur ut cillum sint elit tempor commodo aliqua in consequat. Magna labore pariatur Lorem irure sunt ex velit sint consectetur minim do aliquip sunt. Esse ea incididunt magna occaecat cillum enim do.`,
    rating: 8,
    ratingStatus: `good`,
    qntRatings: 200,
    director: `Willie Baker`,
    starring: [`Elsie Simon`, `Ora Lee`, `Essie Davidson`, `Nettie Schwartz`, `Louise McGee`, `Katherine Hunt`]
  };

  const tree = renderer
    .create(<BrowserRouter>
      <DetailsFilmCard
        film={mockFilm}
        films={[]}
        onTitleClick={() => {}}
      />
    </BrowserRouter>)
    .toJSON;

  expect(tree).toMatchSnapshot();
});
