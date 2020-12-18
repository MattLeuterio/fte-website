import React from "react";
import PropTypes from "prop-types";

import { LinkA } from "./style";
import Icon from "../Icon";
import Inter from "../../ui/typography/inter";

const Link = ({ url, icon, size, text, padding }) => {
  return (
    <>
      <LinkA href={url} target="_blank" padding={padding} background>
        {icon && <Icon icon={icon} size={size} />}
        {text && <Inter type="regularBold">{text}</Inter>}
      </LinkA>
    </>
  );
};

Link.defaultProps = {
  padding: "10px 20px",
  background: true,
};

Link.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  size: PropTypes.number,
  padding: PropTypes.string,
  background: PropTypes.bool,
};

export default Link;
