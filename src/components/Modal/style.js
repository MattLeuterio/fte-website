import styled from 'styled-components';
import theme from '../../ui/theme';
import { HeaderMobileHeight, FooterMobileHeight, NavBarWidth } from '../../const.js';

export const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  background: #283a42db;
  opacity: .4;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${theme.zIndex.modal};
`;

export const Container = styled.div`
  position: absolute;
  min-width: 340px;
  max-width: 340px;
  min-height: 390px;
  max-height: 390px;
  background-color:  rgba(223, 223, 223, 0.53);
`;