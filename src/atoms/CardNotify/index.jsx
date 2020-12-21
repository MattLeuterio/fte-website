import React, { useState } from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";
import {
  Card,
  Title,
  Description,
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
  url
}) => {

  const onClickCardHandler = (cardType) => {
    console.log('cardtypeeee', cardType)
    cardType.value === "Search Player" ? (
      console.log('searchplayer')
    ) : (
      cardType === "Result" ? (console.log('result')) : (console.log('external')
      ))
  }
  return (
    <Card cardType={cardType} onClick={(cardType) => onClickCardHandler(cardType)}>
      <Icon icon={urgent ? IconUrgent : IconNotify} size={15} />
      <Inter type="cardNotifyTitle">{title}</Inter>
      <Inter type="cardNotifyDescription">{description}</Inter>
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
