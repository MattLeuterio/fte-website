import React from "react";
import PropTypes from "prop-types";
import { NoResultCTN } from "./style";
import Inter from "../../ui/typography/inter";

const NoResult = ({ text }) => {
  return (
    <NoResultCTN>
      <Inter>{text}</Inter>
    </NoResultCTN>
  );
};

NoResult.defaultProps = {
  text: "No Result",
};

NoResult.propTypes = {
  text: PropTypes.string.isRequired,
};

export default NoResult;
