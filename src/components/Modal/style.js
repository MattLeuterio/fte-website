import styled from 'styled-components';
import theme from '../../ui/theme';
import { HeaderMobileHeight, FooterMobileHeight, NavBarWidth } from '../../const.js';

export const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: #283a42db;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${theme.zIndex.modal};
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 340px;
  max-width: 340px;
  min-height: 390px;
  max-height: 390px;
  background-color:  rgba(223, 223, 223, 0.53);
  box-shadow: ${theme.utility.boxShadowDown};
  border-radius: 13px;
  z-index: ${theme.zIndex.loader};
  padding: 30px 20px;
  display: flex;
  flex-direction: column;

  > div:first-child {
    position: absolute;
    top: 20px;
    right: 30px;
  }

  > div:nth-child(2) {
    padding-bottom: 15px;
  }
`;

export const Content = styled.div`
  flex-grow: 1;
  overflow-y: auto;

  > div {
    margin: 10px 0;
  }
`;