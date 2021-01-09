import styled from 'styled-components';
import theme from '../../ui/theme';

export const LinkA = styled.a`
  width: fit-content;
  height: fit-content;
  padding: ${props => props.padding};
  display: flex;
  color: ${theme.colors.primary.white};
  justify-content: flex-end;
  align-items: center;
  background: ${props => props.background ? `${theme.colors.gradients.dark}` : 'transparent'}; 
  border-radius: 12px;
  box-shadow: ${theme.utility.boxShadowDown};
  
  &:hover {
    background: ${theme.colors.gradients.primary};
  }

  > div:last-child {
    margin-left: 5px;
  }
`;
