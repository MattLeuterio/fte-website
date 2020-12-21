import React, { useState, useEffect } from "react";

import {
  JoinContainer,
  Content,
  PeopleMenu,
  MenuElementContainer,
  IconPill,
  TitleSection,
  Game,
  GameTitle,
  GamePlayers,
  Nickname,
  StatsIcon,
} from "./style";
import { Icon, PageTitle, CardPlayer } from "../../atoms";
import { IconAdmins, IconTeams, IconStreamers } from "../../ui/assets/icons";
import Inter from "../../ui/typography/inter";
import { withMediaQueries } from "../../hoc/withMediaQueries";

const contentful = require("contentful");

const Join = ({}) => {
  const [listPlayers, setListPlayers] = useState([]);
  const [listAdmins, setListAdmins] = useState([]);
  const [listStreamers, setListStreamers] = useState([]);
  const [menuActive, setMenuActive] = useState("teams");
  let gamesList = [];

  const client = contentful.createClient({
    space: "pyt8t28zyl2v",
    accessToken: "FvEK9Z8tlrHzGtG0Zzuk3r9yUp0-mnv6sp3SQFDd58I",
  });

  useEffect(() => {
    client.getEntries({ content_type: "players" }).then((response) => {
      const res = response.items;
      setListPlayers(res);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    client.getEntries({ content_type: "admins" }).then((response) => {
      const res = response.items;
      setListAdmins(res);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    client.getEntries({ content_type: "streamers" }).then((response) => {
      const res = response.items;
      setListStreamers(res);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  listPlayers.map((item) => {
    if (!gamesList.includes(item.fields.game)) gamesList.push(item.fields.game);
    return gamesList;
  });

  console.log("listPlayers", listPlayers);
  console.log("gamesList", gamesList);
  console.log("listAdmins", listAdmins);
  console.log("listStreamers", listStreamers);

  const MenuElements = () => {
    const elements = [
      {
        title: "admins",
        icon: IconAdmins,
      },
      {
        title: "teams",
        icon: IconTeams,
      },
      {
        title: "streamers",
        icon: IconStreamers,
      },
    ];

    return elements.map((elm, index) => (
      <MenuElementContainer key={index}>
        <IconPill
          onClick={() => setMenuActive(elm.title)}
          menuActive={menuActive}
          title={elm.title}
        >
          <Icon icon={elm.icon} />
        </IconPill>
        <Inter type="menuPeopleTitle">{elm.title}</Inter>
      </MenuElementContainer>
    ));
  };

  return (
    <JoinContainer>
      <PageTitle text="People" />
      <PeopleMenu>{MenuElements()}</PeopleMenu>
      <TitleSection>
        <Inter type="peopleSectionTitle">{menuActive}</Inter>
      </TitleSection>
      <Content>
        {/* ADMINS */}
        {menuActive === "admins" &&
          listAdmins.map((admin, index) => (
            <CardPlayer
              srcIG={admin.fields.urlInstagram}
              srcTwitch={admin.fields.urlTwitch}
              cardType={menuActive}
              key={index}
              photo={admin.fields.photo.fields.file.url}
              nickname={admin.fields.nickname}
              role={admin.fields.role}
            />
          ))}
        {/* TEAMS */}
        {menuActive === "teams" &&
          gamesList?.map((game, index) => (
            <Game key={index}>
              <GameTitle>
                <Inter type="peopleGameTitle">{game}</Inter>
              </GameTitle>
              <GamePlayers>
                {listPlayers.map(
                  (player, index) =>
                    game === player.fields.game && (
                      <CardPlayer
                        srcIG={player.fields.urlInstagram}
                        srcTW={player.fields.urlStatistics}
                        cardType={menuActive}
                        key={index}
                        photo={player.fields.photo.fields.file.url}
                        nickname={player.fields.nickname}
                        platform={player.fields.platform}
                        role={player.fields.role}
                      />
                    )
                )}
              </GamePlayers>
            </Game>
          ))}
        {/* STREAMERS */}
        {menuActive === "streamers" &&
          listStreamers.map((streamer, index) => (
            <CardPlayer
              srcIG={streamer.fields.urlInstagram}
              srcTwitch={streamer.fields.urlTwitch}
              cardType={menuActive}
              key={index}
              photo={streamer.fields.photo.fields.file.url}
              nickname={streamer.fields.nickname}
              role="Streamer"
            />
          ))}
      </Content>
    </JoinContainer>
  );
};

export default withMediaQueries(Join);
