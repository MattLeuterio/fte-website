import React from "react";
import { NavLink } from "react-router-dom";
import { HeaderElements, Icon, MenuElements } from "../../../atoms";
import {
  MenuDesktopContainer,
  ElementsContainer,
  TopContainer,
  MenuContainer,
  BottomContainer,
} from "./style";
import { IconFTE } from "../../../ui/assets/icons";

const MenuDesktop = () => (
  <MenuDesktopContainer>
    <ElementsContainer>
      <TopContainer>
        <NavLink exact to="/">
          <Icon icon={IconFTE} size={50} />
        </NavLink>
      </TopContainer>
      <MenuContainer>
        <MenuElements />
      </MenuContainer>
      <BottomContainer>
        <HeaderElements />
      </BottomContainer>
    </ElementsContainer>
  </MenuDesktopContainer>
);
export default MenuDesktop;
