import React from "react";
import PropTypes from "prop-types";
import { ButtonCTN } from "./style";
import Icon from "../Icon";

const Button = ({ sizeIcon, icon, onClick, color, text, rotate }) => {
  return (
    <ButtonCTN onClick={onClick} color={color} rotate={rotate}>
      {text}
      {icon && <Icon icon={icon} size={sizeIcon} />}
    </ButtonCTN>
  );
};

Button.defaultProps = {
  color: "#fff",
  text: "Text",
  sizeIcon: 16,
};

Button.propTypes = {
  icon: PropTypes.string,
  sizeIcon: PropTypes.number,
  onClick: PropTypes.func,
  rotate: PropTypes.number,
};

export default Button;
