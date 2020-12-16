import React from "react";
import PropTypes from "prop-types";
import { NoResultCTN } from "./style";
import Inter from "../../ui/typography/inter";

const Button = ({ sizeIcon, icon, text }) => {
  return (
    <NoResultCTN>
      <Inter>{text}</Inter>
    </NoResultCTN>
  );
};

Button.defaultProps = {
  color: "#fff",
  text: "No Result",
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
