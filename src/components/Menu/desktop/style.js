import styled from 'styled-components';
import theme from '../../../ui/theme';
import { NavBarWidth } from '../../../const';

export const MenuDesktopContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${NavBarWidth}px;
  height: 100vh;
  background: ${theme.colors.gradients.dark};
  border-radius: 0px 12px 12px 0px;
  box-shadow: ${theme.utility.boxShadowDown};
  z-index: ${theme.zIndex.menus};
`;

export const ElementsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;
`;
export const MenuContainer = styled.div`
  width: 100%;
  flex-grow: 1;
`;

export const BottomContainer = styled.div`
  width: 100%;
  height: 20%;
`;