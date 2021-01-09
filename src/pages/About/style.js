import styled from 'styled-components';
import theme from "../../ui/theme";

export const AboutContainer = styled.div`
  min-width: 100%;
  min-height: 100%;
  padding: 55px 30px 120px;

  @media ${theme.device.tabletL} {
    padding: 180px 80px 50px;
  }
`;

export const Content = styled.div`
  margin-top: 30px;

  @media ${theme.device.tabletL} {
    margin-top: 50px;
    width: 70%;
  }
`;

export const Story = styled.p`
  width: 100%;
  line-height: 1.5;
  
  @media ${theme.device.tabletL} {
    width: 85%;
    margin: 50px 0 20px;
  }
`;

export const InstagramContainer = styled.div`
  height: 200px;
  background-color: white;
`;

export const CallToActions = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media ${theme.device.tabletL} {
    flex-direction: row-reverse;
    justify-content: flex-end;
  }
`;

export const Discord = styled.div`
  width: 100%;
  position: relative;
  margin-top: 20px;
  
  @media ${theme.device.tabletL} {
    margin-top: 0;
    margin-right: 20px;
    width: 300px;

  }
  > div {

    > div {

      a {
        text-align: center;
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 0;
      }
    }
  }
`;