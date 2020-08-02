import React from "react";
import renderer from "react-test-renderer";
import Tabs from "./tabs.jsx";

it(`render Tabs`, () => {
  const film = {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    bgImage: `img/bg-the-grand-budapest-hotel.jpg`,
    genre: `drama`,
    years: `2018`,
    description: `Nostrud et anim do nisi aute proident sunt ad. Duis eiusmod esse magna proident. Culpa nostrud sunt Lorem irure nisi. Enim nostrud in proident quis quis et do et nostrud aute ad magna qui aliqua. Ea veniam aliqua consectetur mollit id. Esse ex Lorem exercitation minim minim exercitation ut dolore laborum amet mollit.
    Dolor consequat et ex sunt tempor id amet. Culpa deserunt ex ullamco occaecat exercitation deserunt consectetur tempor aute ea. Qui quis incididunt nisi adipisicing eiusmod deserunt. Duis et officia exercitation magna consectetur ut cillum sint elit tempor commodo aliqua in consequat. Magna labore pariatur Lorem irure sunt ex velit sint consectetur minim do aliquip sunt. Esse ea incididunt magna occaecat cillum enim do.`,
    rating: 8,
    ratingStatus: `Very bad`,
    qntRatings: 200,
    director: `Willie Baker`,
    starring: [`Elsie Simon`, `Ora Lee`, `Essie Davidson`, `Nettie Schwartz`, `Louise McGee`, `Katherine Hunt`],
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    reviews: [
      {
        rating: 8.9,
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: new Date(2016, 11, 24),
        id: 45220
      }
    ],
    runTime: `1h 25m`
  };

  const tabs = [
    {
      text: `Overview`,
      class: `activeClass`,
    },
    {
      text: `Details`,
      class: `usualClass`
    },
    {
      text: `Reviews`,
      class: `usualClass`
    }
  ];

  const tree = renderer
    .create(<Tabs
      onLinkClick={() => {}}
      tabs={tabs}
      film={film}
      currentTab={`Overview`}
    />)
    .toJSON;

  expect(tree).toMatchSnapshot();
});
