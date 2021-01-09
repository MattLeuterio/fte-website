import styled from 'styled-components';
import theme from "../../ui/theme";
import {HeaderMobileHeight} from "../../const";

export const PageNotFoundContainer = styled.div`
  min-width: 100%;
  min-height: calc(100vh - ${HeaderMobileHeight}px);
  padding: 55px 30px 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  > div:first-child {
    text-align: center;
    width: fit-content;
    margin-bottom: 15px;

    span {
      display: block;
      font-weight: 700;
      font-size: 60px;
      margin-bottom: 10px;
    }
  }
  
  @media ${theme.device.tabletL} {
    min-height: 100vh;
    padding: 180px 80px 50px;
  }
`;