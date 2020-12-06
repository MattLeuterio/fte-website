import React from "react";
import { PeopleContainer } from "./style";

import containerVariants from "../../ui/containerVariants";

const people = () => {
  return (
    <PeopleContainer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      People
    </PeopleContainer>
  );
};

export default people;
