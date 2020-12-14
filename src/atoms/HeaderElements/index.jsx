import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import { withMediaQueries } from "../../hoc/withMediaQueries";
import { HeaderElementsContainer } from "./style";
import {
  IconFTE,
  IconResult,
  IconResultActive,
  IconNotify,
  //IconNotifyActive,
} from "../../ui/assets/icons";
import Icon from "../Icon";

const HeaderElements = ({ sizeElements, sizeLogo, isMobile, mediaIsPhone }) => {
  const lastResultsPath = "/last-results";

  return (
    <HeaderElementsContainer isMobile={mediaIsPhone}>
      <Icon icon={IconNotify} size={sizeElements} />

      {mediaIsPhone && (
        <NavLink exact to="/" activeClassName="menuElementIsActive">
          <Icon icon={IconFTE} size={sizeLogo} />
        </NavLink>
      )}

      <NavLink to="/last-results" activeClassName="menuElementIsActive">
        <Icon
          icon={
            window.location.pathname === lastResultsPath
              ? IconResultActive
              : IconResult
          }
          size={sizeElements}
        />
      </NavLink>
    </HeaderElementsContainer>
  );
};

HeaderElements.defaultProps = {
  sizeElements: 20,
  sizeLogo: 60,
};

HeaderElements.propTypes = {
  sizeElements: PropTypes.number.isRequired,
  sizeLogo: PropTypes.number.isRequired,
  isMobile: PropTypes.bool,
};

export default withMediaQueries(HeaderElements);
