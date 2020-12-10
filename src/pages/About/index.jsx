import React from "react";

import containerVariants from "../../ui/containerVariants";
import { AboutContainer } from "./style";

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
