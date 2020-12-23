import React, { useState, useEffect } from "react";
import { CardNotify, Icon } from "../../atoms";

import { Overlay, ModalContainer, Content } from "./style";
import { IconClose } from "../../ui/assets/icons";
import Inter from "../../ui/typography/inter";

const contentful = require("contentful");

const Modal = ({ onClick }) => {
  const [listNotifies, setListNotifies] = useState([]);

  const client = contentful.createClient({
    space: "pyt8t28zyl2v",
    accessToken: "FvEK9Z8tlrHzGtG0Zzuk3r9yUp0-mnv6sp3SQFDd58I",
  });

useEffect(() => {
  client.getEntries({ content_type: "notification" }).then((response) => {
    const res = response.items;
    setListNotifies(res);
  });
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

  return (
    <>
      <Overlay onClick={onClick} />
      <ModalContainer>
        <Icon icon={IconClose} size={17} onClick={onClick}/>
        <Inter type="modalTitle">Last updates</Inter>
        <Content>
          {listNotifies.map(notify => (
            <CardNotify
              //onClick={() => onClickCardHandler(notify.fields.notifyType, notify.fields.url)}
              urgent={notify.fields.urgent}
              title={notify.fields.title}
              description={notify.fields.description}
              url={ notify.fields.notifyType === "Search Player" ? "/join"
               : (
                notify.fields.notifyType === "Result" ? "/last-results" : notify.fields.url
                )} 
            />
          ))}
        </Content>
      </ModalContainer>
    </>
  );
};

export default Modal;
