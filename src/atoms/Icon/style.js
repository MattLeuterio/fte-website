import styled from 'styled-components';

export const ImageWrapper = styled.div`
  width: ${ props  => `${props.size}px`};
  cursor: pointer;
  //display: flex;

  img {
    transform: ${ props  => !!props.rotate ? `rotate(${props.rotate}deg)` : null};
    transition: all 250ms ease-out;
  }
`;