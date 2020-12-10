import styled from 'styled-components';
import theme from '../../ui/theme';
import bg from "../../ui/assets/img/bg-sledge.jpg"
import { HeaderMobileHeight, FooterMobileHeight, NavBarWidth } from '../../const.js';

export const PageContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - ${HeaderMobileHeight}px - ${FooterMobileHeight}px);
  margin-top: ${HeaderMobileHeight}px;

  @media ${theme.device.tabletL} {
    height: 100vh;
    width: calc(100% - ${NavBarWidth}px);
    margin-left: ${NavBarWidth}px;
    margin-top: 0;
  }
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(163.19deg,rgb(62 181 133 / 84%) -235.67%,rgb(34 52 60) 64.21%), url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
`;