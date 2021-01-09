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
          Flat Earth Esports nasce nel 2019 da un gruppo di amici con la
          passione per i videogames. In poco tempo siamo riusciti a creare una
          bella community, team competitive su più titoli e un buon gruppo di
          streamer, tutti ragazzi seri che lavorano per il bene
          dell'associazione e della sua community. Il rispetto e la serietà sono
          le nostre colonne portanti e tali virtù ci aspettiamo dalle persone
          che entrano a far parte della nostra famiglia. I nostri obbiettivi
          principali sono quelli di portare i ragazzi che compongono i vari team
          a competere ai livelli più alti, espandere e mantenere sana la nostra
          community e organizzare una spedizione sulla barriera di ghiaccio ai
          confini della terra piatta. Se il progetto vi interessa non esitate ad
          entrare nel nostro Discord o fare richiesta per entrare in uno dei
          nostri team tramite la pagina JOIN US. #wearefte
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
              Clicca su JOIN ed entra nel nostro canale Discord. La famiglia FTE
              ti sta aspettando.
              <Link url="https://discord.gg/qPengpCjtu" text="Join" />
            </ToggleSection>
          </Discord>
        </CallToActions>
      </Content>
    </AboutContainer>
  );
};

export default withMediaQueries(about);
