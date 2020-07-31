import React, {PureComponent} from "react";

const withTabState = (Component) => {

  return class TabState extends PureComponent {
    constructor(props) {
      super(props);

      this.activeClass = `movie-nav__item movie-nav__item--active`;
      this.usualClass = `movie-nav__item`;

      this.state = {
        currentTab: `Overview`,
        tabs: [
          {
            text: `Overview`,
            class: this.activeClass,
          },
          {
            text: `Details`,
            class: this.usualClass
          },
          {
            text: `Reviews`,
            class: this.usualClass
          }
        ]
      };

      this._onLinkClick = this._onLinkClick.bind(this);
    }


    _onLinkClick(title) {
      this.setState(() => {
        return {currentTab: title,
        };
      });
      this.setState(() => {
        return {tabs: (this.state.tabs.map((it) => {
          it.class = it.text === title ? this.activeClass : this.usualClass;
          return it;
        }))};
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          currentTab={this.state.currentTab}
          onLinkClick={this._onLinkClick}
          tabs={this.state.tabs}
        />
      );
    }
  };
};

export default withTabState;
