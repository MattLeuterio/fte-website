import styled from 'styled-components';
import theme from '../../ui/theme';

export const SocialsRowContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 60px;
  z-index: ${theme.zIndex.menus};

  a:not(:first-child) {
    margin-left: 20px;
  }
  
  a:hover {
    transform: scale(1.1);
  }
`;

export const Link = styled.a`
`;
