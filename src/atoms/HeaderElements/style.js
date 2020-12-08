import styled from 'styled-components';

export const HeaderElementsContainer = styled.div`
  height: 100%;
  padding: 0 40px;
  display: flex;
  flex-direction: ${props => props.isMobile ? 'row' : 'column'};
  justify-content: ${props => props.isMobile ? 'space-between' : 'center'};
  align-items: center;

  > div:first-child  {
    margin-bottom: ${props => props.isMobile ? '0' : '20px'};
  }
`;