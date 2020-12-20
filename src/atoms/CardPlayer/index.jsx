import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";
import {
  Card,
  Socials,
  Link,
  Nickname,
  StatsIcon,
  OverlayStats,
  Role,
  InfoPlayer,
  Platform,
  RoleOverlay,
  StatsRow,
  Level,
  RankedKD,
  Winrate,
} from "./style";
import {
  IconStats,
  IconStatsActive,
  IconInstagram,
  IconTwitch,
  IconTW,
} from "../../ui/assets/icons";
import Inter from "../../ui/typography/inter";

const CardPlayer = ({
  cardType,
  srcIG,
  srcTwitch,
  srcTW,
  photo,
  role,
  nickname,
  platform,
  level,
  rankedKd,
  winrate,
}) => {
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
      {cardType === "admins" && <Role>{role}</Role>}
      {cardType === "streamers" && <Role>{role}</Role>}
      {stats && (
        <OverlayStats>
          <InfoPlayer>
            <Platform>
              <Inter type="labelUppercase">Platform</Inter>
              <Inter type="gameUppercase">{platform}</Inter>
            </Platform>
            <RoleOverlay>
              <Inter type="labelUppercase">Role</Inter>
              <Inter type="gameUppercase">{role}</Inter>
            </RoleOverlay>
          </InfoPlayer>
          {/* <StatsRow>
            <Level>
              <Inter type="labelUppercase">Level</Inter>
              <Inter type="gameUppercase">{level}</Inter>
            </Level>
            <RankedKD>
              <Inter type="labelUppercase">RankedKD</Inter>
              <Inter type="gameUppercase">{rankedKd}</Inter>
            </RankedKD>
            <Winrate>
              <Inter type="labelUppercase">Winrate</Inter>
              <Inter type="gameUppercase">{winrate}</Inter>
            </Winrate>
          </StatsRow> */}
        </OverlayStats>
      )}
    </Card>
  );
};

CardPlayer.propTypes = {};

export default CardPlayer;
