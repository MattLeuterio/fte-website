import styled from 'styled-components';
import { motion } from "framer-motion";

export const HomeContainer = styled(motion.div)`
  min-width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
`;