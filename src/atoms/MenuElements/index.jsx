import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import { MenuElementsContainer } from "./style";
import {
  IconHome,
  IconInfo,
  IconJoin,
  IconPeople,
} from "../../ui/assets/icons";
import Icon from "../Icon";

const MenuElements = ({ sizeElements }) => {
  return (
    <MenuElementsContainer>
      <NavLink exact to="/" activeClassName="menuElementIsActive">
        <Icon icon={IconHome} sizeElements={sizeElements} />
      </NavLink>
      <NavLink to="/about" activeClassName="menuElementIsActive">
        <Icon icon={IconInfo} sizeElements={sizeElements} />
      </NavLink>
      <NavLink to="/join" activeClassName="menuElementIsActive">
        <Icon icon={IconJoin} sizeElements={sizeElements} />
      </NavLink>
      <NavLink to="/people" activeClassName="menuElementIsActive">
        <Icon icon={IconPeople} sizeElements={sizeElements} />
      </NavLink>
    </MenuElementsContainer>
  );
};

MenuElements.defaultProps = {
  sizeElements: 25,
};

MenuElements.propTypes = {
  sizeElements: PropTypes.number.isRequired,
};

export default MenuElements;
