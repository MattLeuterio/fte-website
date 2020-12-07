import React from "react";
import { Container } from "./style";

import containerVariants from "../../ui/containerVariants";
import { Menu } from "../../components";

const pageContainer = ({ children }) => {
  return (
    <Container
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
      <Menu />
    </Container>
  );
};

export default pageContainer;
