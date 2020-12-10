import styled from 'styled-components';
import { motion } from "framer-motion";
import theme from '../../ui/theme';
import { HeaderMobileHeight, FooterMobileHeight, NavBarWidth } from '../../const.js';

export const Container = styled(motion.div)`
  background-color: red;
  width: 100%;
  min-height: calc(100vh - ${HeaderMobileHeight}px - ${FooterMobileHeight}px);
  margin-top: ${HeaderMobileHeight}px;

  @media ${theme.device.tabletL} {
    background-color: blue;
    height: 100vh;
    width: calc(100% - ${NavBarWidth}px);
    margin-left: ${NavBarWidth}px;
    margin-top: 0;
  }
`;