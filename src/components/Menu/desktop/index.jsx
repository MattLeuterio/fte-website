import React from "react";
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
        <Icon icon={IconFTE} size={50} />
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
