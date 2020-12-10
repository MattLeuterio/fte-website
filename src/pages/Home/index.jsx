import React from "react";

import containerVariants from "../../ui/containerVariants";
import { HomeContainer } from "./style";

const home = () => {
  return (
    <HomeContainer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      Home
    </HomeContainer>
  );
};

export default home;
