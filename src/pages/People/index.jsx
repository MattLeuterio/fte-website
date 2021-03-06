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
  PeopleRow,
} from "./style";
import { Icon, PageTitle, CardPlayer } from "../../atoms";
import { IconAdmins, IconTeams, IconStreamers } from "../../ui/assets/icons";
import Inter from "../../ui/typography/inter";
import { withMediaQueries } from "../../hoc/withMediaQueries";
import { getContent } from "../../contentful";

const Join = () => {
  const [listPlayers, setListPlayers] = useState([]);
  const [listAdmins, setListAdmins] = useState([]);
  const [listStreamers, setListStreamers] = useState([]);
  const [menuActive, setMenuActive] = useState("teams");
  let gamesList = [];
  
  useEffect(() => {
    getContent("players", setListPlayers);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    getContent("admins", setListAdmins);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    getContent("streamers", setListStreamers);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  listPlayers.map((item) => {
    if (!gamesList.includes(item.fields.game)) gamesList.push(item.fields.game);
    return gamesList;
  });

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
      <PageTitle text="People" subText="Our family" />
      <PeopleMenu>{MenuElements()}</PeopleMenu>
      <TitleSection>
        <Inter type="peopleSectionTitle">{menuActive}</Inter>
      </TitleSection>
      <Content>
        {/* ADMINS */}
        {menuActive === "admins" && (
          <PeopleRow>
            {listAdmins.map((admin, index) => (
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
          </PeopleRow>
        )}
        {/* TEAMS */}
        {menuActive === "teams" &&
          gamesList?.map((game, index) => (
            <Game key={index}>
              <GameTitle>
                <Inter type="peopleGameTitle">{game}</Inter>
              </GameTitle>
              <PeopleRow>
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
                        birthyear={player.fields.birthyear}
                        nationality={player.fields.nationality}
                        sens={player.fields.sens}
                      />
                    )
                )}
              </PeopleRow>
            </Game>
          ))}
        {/* STREAMERS */}
        {menuActive === "streamers" && (
          <PeopleRow>
            {listStreamers.map((streamer, index) => (
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
          </PeopleRow>
        )}
      </Content>
    </JoinContainer>
  );
};

export default withMediaQueries(Join);
