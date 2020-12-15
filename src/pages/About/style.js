import styled from 'styled-components';
import { motion } from "framer-motion";
import theme from "../../ui/theme";

export const AboutContainer = styled(motion.div)`
  min-width: 100%;
  min-height: 100%;
  padding: 55px 30px;

  @media ${theme.device.tabletL} {
    padding: 180px 80px 50px;
  }
`;

export const Content = styled.div`
  margin-top: 30px;

  @media ${theme.device.tabletL} {
    margin-top: 50px;
  }
`;

export const Story = styled.p`
  width: 100%;
  
  @media ${theme.device.tabletL} {
    width: 70%;
    margin: 50px 0 20px;
  }
`;

export const InstagramContainer = styled.div`
  height: 200px;
  background-color: white;
`;

export const CallToActions = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`;