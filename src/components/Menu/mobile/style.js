import styled from 'styled-components';
import theme from '../../../ui/theme';
import { HeaderMobileHeight, FooterMobileHeight } from '../../../const';

export const HeaderMobileContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${HeaderMobileHeight}px;
  background: ${theme.colors.gradients.dark};
  box-shadow: ${theme.utility.boxShadowDown};
  border-radius: 0px 0px 12px 12px;
  z-index: ${theme.zIndex.menus};
  `;

export const MenuMobileContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${FooterMobileHeight}px;
  background: ${theme.colors.gradients.dark};
  box-shadow: ${theme.utility.boxShadowUp};
  border-radius: 12px 12px 0px 0px;
  z-index: ${theme.zIndex.menus}
`;

