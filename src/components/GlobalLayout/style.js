import styled from 'styled-components';
import theme from '../../ui/theme';
import { HeaderMobileHeight, FooterMobileHeight, NavBarWidth } from '../../const.js';

export const PageContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - ${HeaderMobileHeight}px - ${FooterMobileHeight}px);
  margin-top: ${HeaderMobileHeight}px;

  @media ${theme.device.tabletL} {
    min-height: 100vh;
    width: calc(100% - ${NavBarWidth}px);
    margin-left: ${NavBarWidth}px;
    margin-top: 0;
  }
`;

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90%;
  background-image: linear-gradient(163.19deg,rgb(7 255 155 / 71%) -155.67%,rgb(34 52 60) 54.21%),url(${props => props.bgs});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
  background-position-x: center;
  background-position-y: calc(${HeaderMobileHeight}px - 10px);

  @media ${theme.device.tabletL} {
    background-position-y: top;  
  }
`;