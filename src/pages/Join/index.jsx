import React from "react";
import { JoinContainer } from "./style";

import containerVariants from "../../ui/containerVariants";

const join = () => {
  return (
    <JoinContainer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      Join
    </JoinContainer>
  );
};

export default join;
