import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player.jsx";

it(`render VideoPlayer`, () => {
  const mockFilm =
  {
    image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  };

  const tree = renderer
    .create(
        <VideoPlayer
          src={mockFilm.preview}
          poster={mockFilm.image}
          mouseOver={() => {}}
          mouseLeave={() => { }}
        />)
    .toJSON;

  expect(tree).toMatchSnapshot();
});
