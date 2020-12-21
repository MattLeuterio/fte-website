import React from "react";

import { Menu } from "../index";
import { PageContainer, Background } from "./style";
import { withMediaQueries } from "../../hoc/withMediaQueries";
import { SocialsRow } from "../../atoms";

const globalLayout = ({ children, mediaIsPhone }) => {
  return (
    <>
      <Background />
      <Menu />
      {!mediaIsPhone && <SocialsRow />}
      <PageContainer>{children}</PageContainer>
    </>
  );
};

export default withMediaQueries(globalLayout);
