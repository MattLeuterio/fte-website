import React from "react";
import { PageTitle, Link, ToggleSection } from "../../atoms";
import { withMediaQueries } from "../../hoc/withMediaQueries";
import {
  IconInstagramG,
  IconSpotifyG,
  IconTwitterG,
  IconDiscordG,
} from "../../ui/assets/icons";

import containerVariants from "../../ui/containerVariants";
import {
  AboutContainer,
  Content,
  Story,
  // InstagramContainer,
  CallToActions,
  Discord,
} from "./style";

const about = ({ mediaIsPhone, isMobile }) => {
  return (
    <AboutContainer>
      <PageTitle text="About" />
      <Content>
        <Story>
          Flat Earth Esports was born in 2019 by a group of friends with the
          passion for videogames. In a short time we succeeded in creating a
          nice community, competitive teams on multiple titles and a good group
          of streamers, all serious guys working for the association’s sake and
          its community. Respect and seriousness are our pillars and these
          virtues we expect from the people who become part of our family. Our
          main goals are to bring the guys of the various teams to compete at
          the highest levels, expand and keep our community healthy and organize
          an expedition on the ice barrier to the edge of the flat earth. If you
          are interested in the project, do not hesitate to go in our Discord or
          apply to join one of our teams using the JOIN US page. #wearefte
        </Story>
        {/* {!mediaIsPhone && <InstagramContainer></InstagramContainer>} */}
        <CallToActions>
          {mediaIsPhone && (
            <Link
              url="https://www.instagram.com/flatearthesports/"
              padding="7px"
              size={28}
              icon={IconInstagramG}
            />
          )}
          <Link
            url="https://open.spotify.com/playlist/51QVxg4b9GP2bUKhcEubM3"
            text="FTE Selection"
            padding="10px 20px"
            size={28}
            icon={IconSpotifyG}
          />
          {mediaIsPhone && (
            <Link
              url="https://twitter.com/EsportsFlat"
              padding="7px"
              size={28}
              icon={IconTwitterG}
            />
          )}
          <Discord>
            <ToggleSection icon={IconDiscordG} text="Server Discord">
              Click on JOIN and come into our Discord channel. The FTE family is
              waiting for you!
              <Link url="https://discord.gg/qPengpCjtu" text="Join" />
            </ToggleSection>
          </Discord>
        </CallToActions>
      </Content>
    </AboutContainer>
  );
};

export default withMediaQueries(about);
