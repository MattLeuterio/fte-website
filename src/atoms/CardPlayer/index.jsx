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
  Role,
  InfoPlayer,
  Platform,
  RoleOverlay,
  StatsRow,
  Birthyear,
  Nationality,
  Sens,
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
  birthyear,
  nationality,
  sens,
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
          <StatsRow>
            <Birthyear>
              <Inter type="labelUppercase">Year</Inter>
              <Inter type="gameUppercase">{birthyear}</Inter>
            </Birthyear>
            <Nationality>
              <Inter type="labelUppercase">Nationality</Inter>
              <Inter type="gameUppercase">{nationality}</Inter>
            </Nationality>
          </StatsRow>
          <Sens>
            <Inter type="labelUppercase">Sens</Inter>
            <Inter type="gameUppercase">{sens}</Inter>
          </Sens>
        </OverlayStats>
      )}
    </Card>
  );
};

CardPlayer.propTypes = {
  cardType: PropTypes.string,
  srcIG: PropTypes.string,
  srcTwitch: PropTypes.string,
  photo: PropTypes.string,
  role: PropTypes.string,
  nickname: PropTypes.string,
  platform: PropTypes.string,
};

export default CardPlayer;
