import React from "react";
import PropTypes from "prop-types";
import TabChanger from "../tab-changer/tab-changer.jsx";
import withTabState from "../../hocs/with-tab-state/with-tab-state.jsx";

const Tabs = (props) => {
  const {onLinkClick, tabs, film, currentTab} = props;
  return (
    <React.Fragment>
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {tabs.map((tab) => {
              return (
                <li className={tab.class} key={tab.text}>
                  <a href="#" className="movie-nav__link" onClick={(evt) => {
                    evt.preventDefault();
                    onLinkClick(tab.text);
                  }}>{tab.text}</a>
                </li>
              );
            })}
          </ul>
        </nav>
        <TabChanger
          currentTab={currentTab}
          film={film}
        />
      </div>
    </React.Fragment>
  );
};

Tabs.propTypes = {
  onLinkClick: PropTypes.func.isRequired,
  tabs: PropTypes.array.isRequired,
  film: PropTypes.object.isRequired,
  currentTab: PropTypes.string.isRequired
};

export default withTabState(Tabs);
