import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";
import { Ctn } from "./style";
import { IconStats, IconStatsActive } from "../../ui/assets/icons";

const IconStatistics = ({ statsState }) => {
  const [stats, setStats] = useState(true);

  const statsHandler = () => {
    setStats(!stats);
  };

  return (
    <Ctn statsState={stats}>
      <Icon
        icon={stats ? IconStatsActive : IconStats}
        onClick={() => statsHandler()}
      />
    </Ctn>
  );
};

IconStatistics.propTypes = {
  stats: PropTypes.bool,
};

export default IconStatistics;
