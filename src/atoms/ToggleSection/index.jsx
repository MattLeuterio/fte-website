import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { ToggleCTN, Content, HeaderToggle, Title } from "./style";
import Icon from "../Icon";
import { IconArrowCarousel } from "../../ui/assets/icons";

const ToggleSection = ({ size, icon, text, children, rotate }) => {
  const [toggle, setToggle] = useState(false);
  const [rotateToggle, setRotateToggle] = useState(false);

  const toogleHandler = () => {
    setRotateToggle(!rotateToggle);
    setToggle(!toggle);
  };

  return (
    <ToggleCTN
      onClick={() => toogleHandler()}
      rotateToogle={toggle}
      rotate={rotate}
    >
      <HeaderToggle>
        <Title>
          {icon && <Icon icon={icon} size={size} />}
          {text}
        </Title>
        <div
          style={
            toggle
              ? { transform: "rotate(-180deg)" }
              : { transform: "rotate(0deg)" }
          }
        >
          <Icon icon={IconArrowCarousel} size={13} />
        </div>
      </HeaderToggle>
      {toggle && <Content>{children}</Content>}
    </ToggleCTN>
  );
};

ToggleSection.defaultProps = {
  color: "#fff",
  text: "Text",
  sizeIcon: 16,
};

ToggleSection.propTypes = {
  icon: PropTypes.string,
  sizeIcon: PropTypes.number,
  onClick: PropTypes.func,
  rotate: PropTypes.number,
};

export default ToggleSection;
