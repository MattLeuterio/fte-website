import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import { withMediaQueries } from "../../hoc/withMediaQueries";
import { HeaderElementsContainer } from "./style";
import {
  IconFTE,
  IconResult,
  IconResultActive,
  IconNotify,
  IconNotifyActive,
} from "../../ui/assets/icons";
import Icon from "../Icon";
import { Modal } from "../../components";
import { getContent } from "../../contentful";


const HeaderElements = ({ sizeElements, sizeLogo, isMobile, mediaIsPhone }) => {
  const [listNotifies, setListNotifies] = useState([]);
  const [visibility, setVisibility] = useState(false);

  const lastResultsPath = "/latest-results";

  useEffect(() => {
    getContent("notification", setListNotifies);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClickHandler = () => {
    setVisibility(!visibility);
  };
  return (
    <>
      {visibility && <Modal onClick={() => onClickHandler()} />}
      <HeaderElementsContainer isMobile={mediaIsPhone}>
        {listNotifies.length > 0 ? (
          <Icon
            onClick={() => onClickHandler()}
            icon={IconNotifyActive}
            size={sizeElements}
          />
        ) : (
          <Icon icon={IconNotify} size={sizeElements} />
        )}

        {mediaIsPhone && (
          <NavLink exact to="/" activeClassName="menuElementIsActive">
            <Icon icon={IconFTE} size={sizeLogo} />
          </NavLink>
        )}

        <NavLink to="/latest-results" activeClassName="menuElementIsActive">
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
    </>
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
