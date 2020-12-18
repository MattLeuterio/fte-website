import React, { useState } from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";
import {
  Card,
  Socials,
  Link,
  Nickname,
  StatsIcon,
  OverlayStats,
  Role
} from "./style";
import {
  IconStats,
  IconStatsActive,
  IconInstagram,
  IconTwitch,
  IconTW,
} from "../../ui/assets/icons";

const CardPlayer = ({ cardType, srcIG, srcTwitch, srcTW, photo, role, nickname }) => {
  const [stats, setStats] = useState(false);

  return (
    <Card photo={photo}>
      <Socials>
        {srcIG && (
        <Link href={srcIG} target="_blank">
          <Icon icon={IconInstagram} />
        </Link>
        )}
        {cardType === "admins" && srcTwitch && (
          <Link href={srcTwitch} target="_blank">
            <Icon icon={IconTwitch} />
          </Link>
        )}
        {cardType === "streamers" && srcTwitch && (
          <Link href={srcTwitch} target="_blank">
            <Icon icon={IconTwitch} />
          </Link>
        )}
        {cardType === "teams" && srcTW && (
          <Link href={srcTW} target="_blank">
            <Icon icon={IconTW} />
          </Link>
        )}
      </Socials>
      <Nickname>{nickname}</Nickname>
      {cardType === "teams" && (
        <StatsIcon>
          <Icon
            icon={stats ? IconStatsActive : IconStats}
            onClick={() => setStats(!stats)}
          />
        </StatsIcon>
      )}
      {cardType === "admins" && (
        <Role>
          {role}
        </Role>
      )}
      {cardType === "streamers" && (
        <Role>
          {role}
        </Role>
      )}
      {stats && <OverlayStats></OverlayStats>}
    </Card>
  );
};

CardPlayer.propTypes = {};

export default CardPlayer;
