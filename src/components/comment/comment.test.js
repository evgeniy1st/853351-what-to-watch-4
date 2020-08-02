import React from "react";
import renderer from "react-test-renderer";
import Comment from "./comment.jsx";

it(`render comment`, () => {
  const comment = {
    rating: 8.9,
    text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    author: `Kate Muir`,
    date: new Date(2016, 11, 24),
    id: 45220
  };
  const id = 43388;

  const tree = renderer
    .create(<Comment
      comment={comment}
      id={id}
    />)
    .toJSON;

  expect(tree).toMatchSnapshot();
});
