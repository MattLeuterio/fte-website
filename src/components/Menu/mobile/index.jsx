import React from "react";
import { NavLink } from "react-router-dom";

import {
  MenuMobileContainer,
  HeaderMobileContainer,
  HeaderElementsContainer,
} from "./style";
import { Icon, MenuElements } from "../../../atoms";
import {
  IconFTE,
  IconResult,
  IconResultActive,
  IconNotify,
  //IconNotifyActive,
} from "../../../ui/assets/icons";

const MenuMobile = () => {
  const lastResultsPath = "/last-results";

  return (
    <>
      <HeaderMobileContainer>
        <HeaderElementsContainer>
          <Icon icon={IconNotify} size={20} />
          <NavLink exact to="/" activeClassName="menuElementIsActive">
            <Icon icon={IconFTE} size={60} />
          </NavLink>
          <NavLink to="/last-results" activeClassName="menuElementIsActive">
            <Icon
              icon={
                window.location.pathname === lastResultsPath
                  ? IconResultActive
                  : IconResult
              }
              size={20}
            />
          </NavLink>
        </HeaderElementsContainer>
      </HeaderMobileContainer>

      <MenuMobileContainer>
        <MenuElements sizeElements={25} />
      </MenuMobileContainer>
    </>
  );
};

export default MenuMobile;
