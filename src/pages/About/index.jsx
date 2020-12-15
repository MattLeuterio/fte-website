import React from "react";
import { PageTitle, Link } from "../../atoms";
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
  InstagramContainer,
  CallToActions,
} from "./style";

const about = ({ mediaIsPhone }) => {
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
        {!mediaIsPhone && <InstagramContainer></InstagramContainer>}
        <CallToActions>
          <Link
            url="https://www.instagram.com/flatearthesports/"
            padding="5px"
            size={28}
            icon={IconInstagramG}
          />
          <Link
            url="https://open.spotify.com/playlist/51QVxg4b9GP2bUKhcEubM3"
            text="FTE Selection"
            padding="5px 10px"
            size={28}
            icon={IconSpotifyG}
          />
          <Link
            url="https://twitter.com/EsportsFlat"
            padding="5px"
            size={28}
            icon={IconTwitterG}
          />
        </CallToActions>
      </Content>
    </AboutContainer>
  );
};

export default withMediaQueries(about);
