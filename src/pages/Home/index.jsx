import React from "react";

import { Button } from "../../atoms";
import containerVariants from "../../ui/containerVariants";
import { HomeContainer, Image, CallToAction } from "./style";
import { IconArrowCarousel } from "../../ui/assets/icons";
import logoFte from "../../ui/assets/img/logo/logo_W.svg";
import Inter from "../../ui/typography/inter";

const Home = (context) => {
  return (
    <HomeContainer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Image src={logoFte} />
      <Inter type="h1">WE ARE FLAT EARTH ESPORTS</Inter>
      <CallToAction>
        <Inter type="slogan">Never just a game</Inter>
        <Inter type="pageSubtitleLarge">Lorem ipsum.</Inter>
        <Button text="Join us" onClick={() => context.history.push("/join")} />
      </CallToAction>
    </HomeContainer>
  );
};

export default Home;
