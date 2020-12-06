import React from "react";
import { PageNotFoundContainer } from "./style";

import containerVariants from "../../ui/containerVariants";

const pageNotFound = () => {
  return (
    <PageNotFoundContainer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      404 - Page Not Found
    </PageNotFoundContainer>
  );
};

export default pageNotFound;
