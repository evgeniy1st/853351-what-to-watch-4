import React, {PureComponent} from "react";

const withPlayingState = (Component) => {

  return class PlayingState extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
      };

      this._mouseOver = this._mouseOver.bind(this);

      this._mouseLeave = this._mouseLeave.bind(this);
    }

    _mouseOver(video) {
      this.setState({
        isPlaying: true,
      });
      if (video) {
        video.play();
      }
    }

    _mouseLeave(video) {
      this.setState({
        isPlaying: false,
      });
      if (video) {
        video.load();
      }
    }

    render() {
      return (
        <Component
          {...this.props}
          mouseOver={this._mouseOver}
          mouseLeave={this._mouseLeave}
        />
      );
    }
  };
};

export default withPlayingState;
