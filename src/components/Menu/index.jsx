import React from "react";

import { withMediaQueries } from "../../hoc/withMediaQueries";
import MenuDesktop from "./desktop";
import MenuMobile from "./mobile";

const Menu = ({ mediaIsPhone }) => {
  if (!mediaIsPhone) {
    return <MenuDesktop />;
  } else {
    return <MenuMobile />;
  }
};

Menu.propTypes = {
  // HOC (withMediaQueries)
  // mediaIsPhone: MediaQueryInterface,
  // mediaIsTablet: MediaQueryInterface
};

export default withMediaQueries(Menu);
