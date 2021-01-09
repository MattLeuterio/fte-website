import React from "react";
import { useCookies } from "react-cookie";

import { Menu } from "../index";
import { PageContainer, Background, Cookie, Text } from "./style";
import { withMediaQueries } from "../../hoc/withMediaQueries";
import { Button, SocialsRow } from "../../atoms";
import {
  BgR6,
  BgCod,
  BgCounterStrike,
  BgValorant,
} from "../../ui/assets/img/backgrounds";
import Inter from "../../ui/typography/inter";

const GlobalLayout = ({ children, mediaIsPhone }) => {
  const [cookies, setCookie] = useCookies(["user"]);
  const bgs = [BgR6, BgCod, BgCounterStrike, BgValorant];
  const backgroundImg = bgs[0];

  const handleCookie = () => {
    setCookie("user", "accept", {
      path: "/",
    });
  };

  return (
    <>
      <Background bgs={backgroundImg} />
      {!cookies.user && (
        <Cookie>
          <Text>
            <Inter type="cardNotifyDescription">
              We use cookies and other tracking technologies to improve your
              browsing experience on our website, to show you personalized
              content and targeted ads, to analyze our website traffic, and to
              understand where our visitors are coming from.
            </Inter>
          </Text>
          <Button
            text="Accept"
            onClick={() => handleCookie()}
            padding="10px 70px"
          />
        </Cookie>
      )}
      <Menu />
      {!mediaIsPhone && <SocialsRow />}
      <PageContainer>{children}</PageContainer>
    </>
  );
};

export default withMediaQueries(GlobalLayout);
