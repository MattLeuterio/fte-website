import React from "react";
import PropTypes from "prop-types";
import { ImageWrapper } from "./style";

const Icon = ({ size, icon, onClick, alt, rotate }) => {
  return (
    <ImageWrapper rotate={rotate} onClick={onClick} size={size}>
      <img src={icon} alt={alt} />
    </ImageWrapper>
  );
};

Icon.defaultProps = {
  size: 20,
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  rotate: PropTypes.number,
};

export default Icon;
