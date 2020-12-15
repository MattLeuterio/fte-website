import styled from 'styled-components';
import theme from '../../ui/theme';

export const LinkA = styled.a`
  width: fit-content;
  padding: ${props => props.padding};
  display: flex;
  color: ${theme.colors.primary.white};
  justify-content: flex-end;
  align-items: center;
  background: ${theme.colors.gradients.dark};
  border-radius: 12px;
  box-shadow: ${theme.utility.boxShadowDown};
  
  &:hover {
    background: ${theme.colors.gradients.primary};
  }
`;
