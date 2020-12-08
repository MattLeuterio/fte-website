import styled from 'styled-components';
import theme from '../../ui/theme';


export const MenuElementsContainer = styled.div`
  height: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: ${props => props.isMobile ? 'row' : 'column'};
  justify-content: ${props => props.isMobile ? 'space-around' : 'center'};
  align-items: center;

  > a:not(:last-child) {
    margin-bottom: ${props => props.isMobile ? '0' : '20px'};
  }

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