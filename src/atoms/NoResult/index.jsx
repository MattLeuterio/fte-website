import React from "react";
import PropTypes from "prop-types";
import { NoResultCTN } from "./style";
import Inter from "../../ui/typography/inter";

const NoResult = ({ text, widthCtn }) => {
  return (
    <NoResultCTN widthCtn={widthCtn}>
      <Inter>{text}</Inter>
    </NoResultCTN>
  );
};

NoResult.defaultProps = {
  text: "No Result",
  widthCtn: "100%",
};

NoResult.propTypes = {
  text: PropTypes.string.isRequired,
};

export default NoResult;
