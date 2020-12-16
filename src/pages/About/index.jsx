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
    <AboutContainer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <PageTitle text="About" />
      <Content>
        <Story>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          voluptate rerum saepe repellat doloribus, deserunt a non corporis esse
          sapiente. Unde, natus at odio odit tenetur voluptatum aliquam nobis,
          sapiente ratione dolorem quas perspiciatis, velit nulla sit. Deleniti,
          error officiis. Ipsum nihil modi dignissimos consequatur placeat
          quisquam doloribus odit atque ea, eaque provident, natus delectus
          minus molestiae velit quos sunt magni ex nostrum nobis vero ab. Itaque
          saepe aliquam, exercitationem deleniti, nobis dolores velit.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus error illo obcaecati.
              <Link url="https://discord.gg/qPengpCjtu" text="Join" />
            </ToggleSection>
          </Discord>
        </CallToActions>
      </Content>
    </AboutContainer>
  );
};

export default withMediaQueries(about);
