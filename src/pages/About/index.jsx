import React from "react";
import { AboutContainer } from "./style";

import containerVariants from "../../ui/containerVariants";

const about = () => {
  return (
    <AboutContainer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      About
    </AboutContainer>
  );
};

export default about;
