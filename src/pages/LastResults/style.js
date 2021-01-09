import styled from 'styled-components';
import theme from "../../ui/theme";

export const LastResultsContainer = styled.div`
  min-width: 100%;
  min-height: 100%;
  padding: 55px 30px 120px;

  @media ${theme.device.tabletL} {
    padding: 180px 80px 50px;
  }
`;

export const Content = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;

  @media ${theme.device.tabletL} {
    margin-top: 50px;
  }
`;

export const CardResult = styled.div`
  width: 100%;
  min-height: 80px;
  max-height: 80px;
  display: flex;
  margin: 5px;
  overflow: hidden;
  border-bottom: 1px solid ${theme.colors.primary.lightGray};
  padding-bottom: 5px;

  @media ${theme.device.tabletL} {
    width: calc(100% / 2 - 30px);
    margin: 15px;
  }
`;
export const DataMatch = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const DataResult = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: right;
`;

export const Opponent = styled.div`
  width: 260px;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;

  > span {
    font-size: 10px;
    font-weight: 700;
    color: ${theme.colors.primary.lightGray};
  }

`;
export const MatchType = styled.div`
  width: 260px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 14px;
  font-weight: 500;
`;

export const Label = styled.div`
  margin-right: 4px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 700;
  width: max-content;
  padding: 2px 4px;
  border-radius: 3px;
  background-color: ${props  => props.result !== 'draw' ? props.result === 'win' ? `${theme.colors.primary.green}` : `${theme.colors.primary.red}` : `${theme.colors.primary.lightGray}`};
`;