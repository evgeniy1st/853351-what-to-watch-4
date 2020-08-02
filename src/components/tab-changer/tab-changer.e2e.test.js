import React from 'react';
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TabChanger from "./tab-changer.jsx";

const film = {
  title: `Shutter Island`,
  image: `img/shutter-island.jpg`,
  bgImage: `img/bg-the-grand-budapest-hotel.jpg`,
  genre: `drama`,
  years: `2008`,
  description: `Ut Lorem incididunt ipsum adipisicing tempor. Esse est aliquip ea do mollit ex amet qui voluptate sunt. Dolore occaecat nisi aliqua laboris proident amet nulla fugiat nulla. Laborum aliquip ullamco qui sit eu reprehenderit excepteur nostrud dolor consectetur. Ea fugiat duis incididunt laboris. Sint tempor do in aute anim est. Sit minim nulla incididunt in aute quis. In culpa aliquip nisi sint cillum ad aliquip. Ad mollit reprehenderit dolor ex. Cupidatat qui mollit ea duis proident deserunt sunt ex laborum magna. Sunt ad exercitation ad culpa nostrud labore amet laborum consequat pariatur incididunt quis reprehenderit. Aliqua eu duis minim quis amet.`,
  rating: 9.5,
  ratingStatus: `Very bad`,
  qntRatings: 300,
  director: `Kate Lyons`,
  starring: [`Eva Jordan`, `Margaret Yates`, `Aiden Wong`, `Bradley Myers`],
  preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  reviews: [
    {
      rating: 8.9,
      text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
      author: `Kate Muir`,
      date: new Date(2016, 11, 24),
      id: 45220
    },

    {
      rating: 8.9,
      text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
      author: `Kate Muir`,
      date: new Date(2016, 11, 24),
      id: 3940
    },
  ],
  runTime: `1h 25m`
};

Enzyme.configure({
  adapter: new Adapter(),
});

it(`change tab on reviews`, () => {
  const tab = shallow(
      <TabChanger
        film={film}
        currentTab={`Reviews`}
      />
  );

  const reviews = tab.find(`.review`);

  expect(reviews).toBeTruthy();
});

it(`change tab on details`, () => {
  const tab = shallow(
      <TabChanger
        film={film}
        currentTab={`Details`}
      />
  );

  const detailsItem = tab.find(`.movie-card__details-item`);

  expect(detailsItem).toBeTruthy();
});

it(`change tab on overviews`, () => {
  const tab = shallow(
      <TabChanger
        film={film}
        currentTab={`Overviews`}
      />
  );

  const rating = tab.find(`.movie-rating`);

  expect(rating).toBeTruthy();
});
