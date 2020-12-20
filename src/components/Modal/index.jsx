import React, { useState } from "react";

import { Overlay, Container } from "./style";

const Modal = () => {
  const [visibility, setVisibility] = useState(true);

  const onClickOverlay = () => {
    setVisibility(!visibility);
  };

  return (
    <>
      {visibility && (
        <Overlay onClick={onClickOverlay}>
          <Container>cia</Container>
        </Overlay>
      )}
    </>
  );
};

export default Modal;
