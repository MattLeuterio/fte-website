import React from "react";
import { MenuMobileContainer, HeaderMobileContainer } from "./style";
import { MenuElements, HeaderElements } from "../../../atoms";

const MenuMobile = () => {
  return (
    <>
      <HeaderMobileContainer>
        <HeaderElements />
      </HeaderMobileContainer>

      <MenuMobileContainer>
        <MenuElements sizeElements={25} />
      </MenuMobileContainer>
    </>
  );
};

export default MenuMobile;
