import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import { withMediaQueries } from "../../hoc/withMediaQueries";
import { MenuElementsContainer } from "./style";
import {
  IconHome,
  IconInfo,
  IconJoin,
  IconPeople,
} from "../../ui/assets/icons";
import Icon from "../Icon";

const MenuElements = ({ sizeElements, isMobile, mediaIsPhone }) => {
  return (
    <MenuElementsContainer isMobile={mediaIsPhone ? true : false}>
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
  isMobile: PropTypes.bool,
};

export default withMediaQueries(MenuElements);
