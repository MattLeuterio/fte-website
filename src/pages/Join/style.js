import styled from 'styled-components';
import { motion } from "framer-motion";
import theme from "../../ui/theme";

export const JoinContainer = styled(motion.div)`
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
  flex-direction: column;

  @media ${theme.device.tabletL} {
    margin-top: 50px;
    flex-direction: row;
  }
`;

export const LookingFor = styled.div`
  display: flex;
  align-items: flex-start;
  overflow-x: auto;
  margin-bottom: 20px;

  @media ${theme.device.tabletL} {
    margin-bottom: 0;
    width: 70%;
    height: 100%;
    flex-wrap: wrap;
  } 
`;
export const CardLookingFor = styled.div`
  width: 310px;
  min-width: 270px;
  background: ${theme.colors.gradients.dark};
  padding: 30px 25px;
  margin: 5px;
  border-radius: 12px;
  box-shadow: ${theme.utility.boxShadowDown};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > div:last-child {
    padding: 0;
    background: transparent;
    box-shadow: none;

    > div {
      padding: 0;
      margin-top: 10px;
    }

    > div:not(:first-child) {
      font-weight: 400;
    }
  }
`;
export const CardHeader = styled.div`
  display: flex;
  justify-content: center;

  > div:last-child {
    margin-left: 10px;
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 28px;
  margin-bottom: 15px;
`;

export const CardPrimaryInfo = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 3px 0;

  > div {
    width: fit-content;
  }

  > div:first-child {
    margin-right: 10px;
  }
`;

export const FormContainer = styled.div`
  width: 300px;
  height: 500px;
`;

export const FormDescription = styled.p`
  margin-bottom: 20px;
`;
export const Form = styled.div`
  width: 100%;
  height: 500px;
`;