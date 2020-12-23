import React, { useState } from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";
import {
  Card,
  Link
} from "./style";
import {
  IconUrgent,
  IconNotify
} from "../../ui/assets/icons";
import Inter from "../../ui/typography/inter";

const CardNotify = ({
  cardType,
  title,
  description,
  urgent,
  onClick,
  url
}) => {
  
  return (
    <Card cardType={cardType} onClick={onClick}>
      <Link href={url} target="_blank">
        <Icon icon={urgent ? IconUrgent : IconNotify} size={15} />
        <Inter type="cardNotifyTitle">{title}</Inter>
        <Inter type="cardNotifyDescription">{description}</Inter>
      </Link>
    </Card>
  );
};

CardNotify.propTypes = {
  cardType: PropTypes.string,
  srcIG: PropTypes.string,
  srcTwitch: PropTypes.string,
  photo: PropTypes.string,
  role: PropTypes.string,
  nickname: PropTypes.string,
  platform: PropTypes.string,
};

export default CardNotify;
