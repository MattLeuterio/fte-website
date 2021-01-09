import React from "react";
import PropTypes from "prop-types";
import { PageTitleContainer } from "./style";
import Inter from "../../ui/typography/inter";

const PageTitle = ({ text, subText }) => {
  return (
    <PageTitleContainer>
      <Inter type="pageTitle">{text}</Inter>
      <Inter type="pageTitleSub">{subText}</Inter>
    </PageTitleContainer>
  );
};

PageTitle.defaultProps = {
  text: "Page title",
  subText: "Page subtitle",
};

PageTitle.propTypes = {
  text: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired,
};

export default PageTitle;
