import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import {VIDEO_PARAMS} from "../../utils/constants.js";

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
    };

    this._video = createRef();
  }

  mouseOver() {
    this.setState({
      isPlaying: true,
    });
    if (this._video.current) {
      this._video.current.play();
    }
  }

  mouseLeave() {
    this.setState({
      isPlaying: false,
    });
    if (this._video.current) {
      this._video.current.load();
    }
  }

  render() {
    const {src, poster} = this.props;
    let timeoutId = null;

    return (
      <div className="small-movie-card__image"
        onMouseOver={() => {
          timeoutId = setTimeout(() => {
            this.mouseOver();
          }, 1000);
        }}
        onMouseLeave={() => {
          clearTimeout(timeoutId);
          this.mouseLeave();
        }}
      >
        <video
          src={src}
          poster={poster}
          ref={this._video}
          width={VIDEO_PARAMS.width}
          height={VIDEO_PARAMS.height}
          preload={VIDEO_PARAMS.preload}
          muted={VIDEO_PARAMS.muted}
        />
      </div>
    );
  }
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default VideoPlayer;