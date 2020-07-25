import React from 'react';
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import VideoPlayer from "./video-player.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

jest.useFakeTimers();

it(`isPlaying in state`, () => {
  const mockFilm = {
    image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  };

  const videoCard = mount(
      <VideoPlayer
        src={mockFilm.preview}
        poster={mockFilm.image}
      />
  );
  const video = videoCard.find(`.small-movie-card__image`);
  video.simulate(`mouseover`, {preventDefault() { }});
  jest.runAllTimers();
  expect(videoCard.state().isPlaying).toEqual(true);

  video.simulate(`mouseleave`, {preventDefault() { }});
  expect(videoCard.state().isPlaying).toEqual(false);
});
