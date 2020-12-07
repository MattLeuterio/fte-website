import styled from 'styled-components';
import theme from '../../../ui/theme';
import { NavBarWidth } from '../../../const';

export const MenuDesktopContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${NavBarWidth}px;
  height: 100vh;
  background: ${theme.colors.gradients.dark};
  border-radius: 0px 12px 12px 0px;
  box-shadow: ${theme.utility.boxShadowDown};
  z-index: ${theme.zIndex.menus}
`;