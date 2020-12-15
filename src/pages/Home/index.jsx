import React from "react";

import { Button } from "../../atoms";
import containerVariants from "../../ui/containerVariants";
import { HomeContainer, Image, CallToAction, Slogan } from "./style";
import logoFte from "../../ui/assets/img/logo/logo_W.svg";
import Inter from "../../ui/typography/inter";

const Home = (context) => {
  return (
    <HomeContainer
      style={{ padding: 0 }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Image src={logoFte} />
      <Slogan>
        <h1 type="h1">
          WE ARE <span>FLAT EARTH ESPORTS</span>
        </h1>
      </Slogan>
      <CallToAction>
        <Inter type="slogan">Never just a game</Inter>
        <Inter type="pageSubtitleLarge">Lorem ipsum.</Inter>
        <Button text="Join us" onClick={() => context.history.push("/join")} />
      </CallToAction>
    </HomeContainer>
  );
};

export default Home;
