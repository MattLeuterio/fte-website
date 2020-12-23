import React from "react";

import { Menu } from "../index";
import { PageContainer, Background } from "./style";
import { withMediaQueries } from "../../hoc/withMediaQueries";
import { SocialsRow } from "../../atoms";
import { BgR6, BgCod, BgCounterStrike, BgValorant } from "../../ui/assets/img/backgrounds"

const globalLayout = ({ children, mediaIsPhone }) => {
  const bgs = [ BgR6, BgCod, BgCounterStrike, BgValorant ];

  return (
    <>
      <Background bgs={bgs[Math.floor(Math.random() * 4)]}/>
      <Menu />
      {!mediaIsPhone && <SocialsRow />}
      <PageContainer>{children}</PageContainer>
    </>
  );
};

export default withMediaQueries(globalLayout);
