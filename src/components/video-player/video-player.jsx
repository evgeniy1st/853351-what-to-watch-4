import React, {createRef} from "react";
import PropTypes from "prop-types";
import {VIDEO_PARAMS} from "../../utils/constants.js";
import withPlayingState from "../../hocs/with-playing-state/with-playing-state.jsx";

const VideoPlayer = (props) => {
  const _video = createRef();

  const {src, poster, mouseOver, mouseLeave} = props;
  let timeoutId = null;

  return (
    <div className="small-movie-card__image"
      onMouseOver={() => {
        timeoutId = setTimeout(() => {
          mouseOver(_video.current);
        }, 1000);
      }}
      onMouseLeave={() => {
        clearTimeout(timeoutId);
        mouseLeave(_video.current);
      }}
    >
      <video
        src={src}
        poster={poster}
        ref={_video}
        width={VIDEO_PARAMS.width}
        height={VIDEO_PARAMS.height}
        preload={VIDEO_PARAMS.preload}
        muted={VIDEO_PARAMS.muted}
      />
    </div>
  );
};

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  mouseOver: PropTypes.func.isRequired,
  mouseLeave: PropTypes.func.isRequired,
};

export default withPlayingState(VideoPlayer);
