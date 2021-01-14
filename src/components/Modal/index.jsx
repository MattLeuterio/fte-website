import React, { useState, useEffect } from "react";
import { CardNotify, Icon } from "../../atoms";

import { Overlay, ModalContainer, Content } from "./style";
import { IconClose } from "../../ui/assets/icons";
import Inter from "../../ui/typography/inter";
import { getContent } from "../../contentful";

const Modal = ({ onClick }) => {
  const [listNotifies, setListNotifies] = useState([]);

  useEffect(() => {
    getContent("notification", setListNotifies);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Overlay onClick={onClick} />
      <ModalContainer>
        <Icon icon={IconClose} size={17} onClick={onClick} />
        <Inter type="modalTitle">Last updates</Inter>
        <Content>
          {listNotifies.map((notify, index) => (
            <CardNotify
              //onClick={() => onClickCardHandler(notify.fields.notifyType, notify.fields.url)}
              urgent={notify.fields.urgent}
              key={index}
              title={notify.fields.title}
              description={notify.fields.description}
              url={
                notify.fields.notifyType === "Search Player"
                  ? "/join"
                  : notify.fields.notifyType === "Result"
                  ? "/latest-results"
                  : notify.fields.url
              }
            />
          ))}
        </Content>
      </ModalContainer>
    </>
  );
};

export default Modal;
