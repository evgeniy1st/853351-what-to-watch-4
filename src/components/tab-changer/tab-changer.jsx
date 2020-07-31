import React from "react";
import TabOverview from "../tab-overview/tab-overview.jsx";
import TabDetails from "../tab-details/tab-details.jsx";
import TabReviews from "../tab-reviews/tab-reviews.jsx";
import PropTypes from "prop-types";

const tabChanger = (props) => {
  const {currentTab, film} = props;
  let Component = null;

  switch (currentTab) {
    case `Reviews`:
      Component = TabReviews;
      break;
    case `Details`:
      Component = TabDetails;
      break;
    default:
      Component = TabOverview;
  }
  return (
    <Component
      film={film}
    />
  );
};

export default tabChanger;

tabChanger.propTypes = {
  currentTab: PropTypes.string.isRequired,
  film: PropTypes.object.isRequired
};
