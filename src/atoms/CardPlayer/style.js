import styled from 'styled-components';
import theme from '../../ui/theme';

export const Card = styled.div`
  width: 220px;
  min-width: 220px;
  height: 300px;
  min-height: 300px;
  background: 
  linear-gradient(163.19deg,rgb(249 255 252 / 0%) -155.67%, rgb(0 0 0 / 45%) 54.21%),
    ${props => `url(${props.photo})`};
  background-size: 120%;
  background-repeat: no-repeat;
  background-position: -23px 0px;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  transition: all .5s;

  &:hover {
    transform: scale(1.05);

    &:first-child {
      transform: scale(1.05) translateX(10px);
    }
  }
`;

export const Socials = styled.div`
  position: absolute; 
  top: 16px;
  left: 16px;
  z-index: 1;
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
`;

export const Link = styled.a`

  &:hover {
    transform: scale(1.1);
  }
`;

export const Nickname = styled.div`
  position: absolute;
  bottom: 16px;
  left: 16px;
  font-weight: 700;
  z-index: 1;
`;

export const StatsIcon = styled.div`
  position: absolute;
  bottom: 16px;
  right: 16px;
  z-index: 1;
`;

export const Role = styled.div`
  position: absolute;
  bottom: 19px;
  right: 16px;
  z-index: 1;
  font-size: 12px;
  font-weight: 700;
  color: ${theme.colors.primary.green};
  text-transform: uppercase;
`;

export const OverlayStats = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: ${theme.colors.gradients.dark};
  opacity: .9;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0 16px;
  padding-bottom: 70px;
`;

export const InfoPlayer = styled.div`
  display: flex;
  margin-bottom: 15px;
`;
export const Platform = styled.div`
  margin-right: 10px;

  > div:first-child {
    margin-bottom: 3px;
  }
`;
export const RoleOverlay = styled.div`
  > div:first-child {
    margin-bottom: 3px;
  }
`;
export const StatsRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  margin-bottom: 15px;
`;
export const Birthyear = styled.div`
  margin-right: 10px;

  > div:first-child {
    margin-bottom: 3px;
  }
`;
export const Nationality = styled.div`
  > div:first-child {
      margin-bottom: 3px;
    }
`;
export const Sens = styled.div`
  > div:first-child {
    margin-bottom: 3px;
  }
`;