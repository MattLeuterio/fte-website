import React from "react";
import { NavLink } from "react-router-dom";

import {
  MenuMobileContainer,
  HeaderMobileContainer,
  MenuElement,
} from "./style";
import { Icon } from "../../../atoms";
import {
  IconHome,
  IconInfo,
  IconJoin,
  IconPeople,
  IconResult,
  IconResultActive,
  IconNotify,
  IconNotifyActive,
} from "../../../ui/assets/icons";

const MenuMobile = ({ elements }) => {
  console.log("props", elements);

  return (
    <>
      <HeaderMobileContainer></HeaderMobileContainer>

      <MenuMobileContainer>
        <MenuElement>
          <NavLink exact to="/" activeClassName="menuElementIsActive">
            <Icon icon={IconHome} size={25} />
          </NavLink>
          <NavLink to="/about" activeClassName="menuElementIsActive">
            <Icon icon={IconInfo} size={25} />
          </NavLink>
          <NavLink to="/join" activeClassName="menuElementIsActive">
            <Icon icon={IconJoin} size={25} />
          </NavLink>
          <NavLink to="/people" activeClassName="menuElementIsActive">
            <Icon icon={IconPeople} size={25} />
          </NavLink>
        </MenuElement>
      </MenuMobileContainer>
    </>
  );
};

export default MenuMobile;
