import React from "react";
import { Button } from "../../atoms";
import Inter from "../../ui/typography/inter";
import { PageNotFoundContainer } from "./style";

const pageNotFound = (context) => {
  console.log(context);
  return (
    <PageNotFoundContainer>
      <Inter type="">
        <span>404</span> Page Not Found
      </Inter>
      <Button text="Go back" onClick={() => context.history.goBack()} />
    </PageNotFoundContainer>
  );
};

export default pageNotFound;
