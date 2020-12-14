import React from "react";

import { Menu } from "../index";
import { PageContainer, Background } from "./style";
import { withMediaQueries } from "../../hoc/withMediaQueries";

const globalLayout = ({ children }) => {
  return (
    <>
      <Background />
      <Menu />
      <PageContainer>{children}</PageContainer>
    </>
  );
};

export default withMediaQueries(globalLayout);
