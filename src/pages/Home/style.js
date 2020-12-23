import styled from 'styled-components';
import { HeaderMobileHeight, FooterMobileHeight, NavBarWidth } from '../../const.js';
import theme from '../../ui/theme';
import { motion } from "framer-motion";

export const HomeContainer = styled(motion.div)`
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-height: calc(100vh - ${HeaderMobileHeight}px - ${FooterMobileHeight}px);
  margin-top: ${HeaderMobileHeight}px;

  @media ${theme.device.tabletL} {
    min-height: 100vh;
    width: calc(100% - ${NavBarWidth}px);
    margin-top: 0;
  }
`;

export const CallToAction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    margin-top: 20px;
  }
`;

export const Image = styled.img`
  width: 125px;
  height: auto;

  @media ${theme.device.tabletL} {
    width: 160px;
  }
`;

export const Slogan = styled.div`
  width: 360px;
  text-align: center;

  @media ${theme.device.tabletL} {
    width: 400px;
  }

  h1 {
    font-size: 48px;
    line-height: 0.9;

    span {
      font-size: 58px;
      display: inline-block;
      font-weight: bold;
      color: ${theme.colors.primary.green};
    }
  }

`;