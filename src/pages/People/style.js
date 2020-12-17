import styled from 'styled-components';
import { motion } from "framer-motion";
import theme from "../../ui/theme";

export const JoinContainer = styled(motion.div)`
  min-width: 100%;
  min-height: 100%;
  padding: 55px 30px 120px;

  @media ${theme.device.tabletL} {
    padding: 180px 80px 50px;
  }
`;

export const Content = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;

  @media ${theme.device.tabletL} {
    margin-top: 50px;
  }
`;

export const PeopleMenu = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 18px;
  
  @media ${theme.device.tabletL} {
    width: 290px;
  }
`;
export const MenuElementContainer = styled.div`
  width: 80px;
  height: 145px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: ${theme.colors.gradients.dark};
  box-shadow: ${theme.utility.boxShadowDown};
  border-radius: 40px;

  > div:last-child {
    margin-bottom: 20px;
  }
`;
export const IconPill = styled.div`
  cursor: pointer;
  width: 66px;
  height: 66px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.menuActive === props.title ? `${theme.colors.gradients.primary}` : `${theme.colors.gradients.dark}`};
  box-shadow: ${theme.utility.boxShadowDown};
  border-radius: 50%;
`;

export const TitleSection = styled.div`
  margin-top: 28px;
`;

export const Game = styled.div`

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
export const GameTitle = styled.div``;
export const GamePlayers = styled.div``;
export const CardPlayer = styled.div``;