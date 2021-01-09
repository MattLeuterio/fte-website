import React from "react";
import { SocialsRowContainer, Link } from "./style";
import { IconInstagram, IconTwitter, IconDiscord } from "../../ui/assets/icons";
import Icon from "../Icon";

const SocialsRow = () => {
  const socials = [
    {
      icon: IconInstagram,
      link: "https://www.instagram.com/flatearthesports/",
    },
    {
      icon: IconTwitter,
      link: "https://twitter.com/EsportsFlat",
    },
    {
      icon: IconDiscord,
      link: "https://discord.gg/qPengpCjtu",
    },
  ];

  return (
    <SocialsRowContainer>
      {socials.map((social, index) => (
        <Link key={index} href={social.link} target="_blank">
          <Icon icon={social.icon} size={40} />
        </Link>
      ))}
    </SocialsRowContainer>
  );
};

export default SocialsRow;
