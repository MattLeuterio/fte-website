import styled from 'styled-components';
import theme from '../../ui/theme';

export const Card = styled.div`
  position: relative;
  height: 100px;
  border-radius: 12px;
  overflow: hidden;
  padding: 18px;

  &:nth-child(odd) {
    background-color: ${theme.colors.primary.gray};
  }
  &:nth-child(even) {
    background-color: ${theme.colors.primary.lightAccent};
  }

  > div:first-child {
    position: absolute;
    top: 12px;
    right: 15px;
  }

  > div:nth-child(2) {
    width: 93%;
    margin-bottom: 10px;
  }
`;