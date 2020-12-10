import React from "react";
import PropTypes from "prop-types";

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

globalLayout.propTypes = {};

export default withMediaQueries(globalLayout);
