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
  width: 600px;
  height: 500px;
  background-image: linear-gradient(163.19deg,rgb(7 255 155 / 71%) -155.67%,rgb(34 52 60) 54.21%),url(${props => props.bgs});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
  background-position-x: center;
  background-position-y: calc(${HeaderMobileHeight}px - 10px);

  @media ${theme.device.tabletL} {
    width: 100%;
    background-position-y: top;  
  }
`;

export const Cookie = styled.div`
  position: fixed;
  bottom: calc(20px + ${FooterMobileHeight}px);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: #232323;
  box-shadow: ${theme.utility.boxShadowUp};
  padding: 20px 30px;
  border-radius: 12px;
  z-index: ${theme.zIndex.absoluteUp};
  width: 90%;
  animation: cookie 2s ease-in-out;

  @media ${theme.device.tabletL} {
    bottom: 20px;
    flex-direction: row;
    width: 60%;
  }
  `;

export const Text = styled.div`
  flex-grow: 1;
  margin-bottom: 15px;

  @media ${theme.device.tabletL} {
    margin-bottom: 0px;
    margin-right: 15px;
  }
`;