import React from "react";
import { HomeContainer } from "./style";

import containerVariants from "../../ui/containerVariants";
import Menu from "../../components/Menu";

const home = () => {
  return (
    <HomeContainer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      Home
      <Menu />
    </HomeContainer>
  );
};

export default home;
