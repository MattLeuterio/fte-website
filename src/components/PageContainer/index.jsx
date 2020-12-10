import React from "react";
import { Container } from "./style";

import containerVariants from "../../ui/containerVariants";
import { Menu } from "../../components";
import { withMediaQueries } from "../../hoc/withMediaQueries";

const pageContainer = ({ children, mediaIsPhone, mediaIsTablet }) => {
  return (
    <Container
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </Container>
  );
};

export default withMediaQueries(pageContainer);
