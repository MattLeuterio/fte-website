import styled from 'styled-components';

export const ImageWrapper = styled.div`
  width: ${ props  => `${props.size}px`};
  cursor: ${props => !!props.onClick ? 'pointer' : 'default'};

  img {
    transform: ${ props  => !!props.rotate ? `rotate(${props.rotate}deg)` : null};
    transition: all 250ms ease-out;
  }
`;