import styled from 'styled-components';
import theme from '../../ui/theme';

export const ToggleCTN = styled.div`
  cursor: pointer;
  user-select: none;
  color: ${ props  => `${props.color}`};
  background: ${theme.colors.gradients.dark};
  border: 0;
  border-radius: 12px;
  box-shadow: ${theme.utility.boxShadowDown};
  font-weight: bold;
  padding: 10px 20px; 

  &:active {
  }
`;

export const HeaderToggle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  > div:last-child {
      transform: ${ props  => props.rotateToogle ? `rotate(${props.rotate}deg)` : 'rotate(0deg)'};
      transition: all 250ms ease-out;
    img {
    }
  }
`;
export const Title = styled.div`  
  width: 70%;
  display: flex;
  align-items: center;

  > div:first-child {
    margin-right: 5px;
  }
`;

export const Content = styled.div`
  padding: 20px 10px 40px;
`;
