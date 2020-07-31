import React from "react";
import PropTypes from "prop-types";

const Comment = (props) => {
  const {comment, id} = props;

  return (
    <div className="review" key={id}>
      <blockquote className="review__quote">
        <p className="review__text">{comment.text}</p>

        <footer className="review__details">
          <cite className="review__author">{comment.author}</cite>
          <time className="review__date" dateTime={comment.date.toISOString()}>{comment.date.toDateString()}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{comment.rating}</div>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired
};

export default Comment;
