import styled from 'styled-components';
import theme from '../../ui/theme';


export const MenuElementsContainer = styled.div`
height: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  > a {
    width: 45px;
    border-radius: 50%;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    &.menuElementIsActive {
      background: ${theme.colors.primary.green};
    }
  }
`;