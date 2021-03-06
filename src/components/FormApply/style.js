import styled from 'styled-components';
import theme from '../../ui/theme';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputCtn = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 90%;
  background: transparent;
  border: none;
  border-bottom: 2px solid ${theme.colors.primary.lightGray};
  padding: 8px 5px;
  color: ${theme.colors.primary.white};

  &:focus {
    outline: none;
    border-bottom: 2px solid ${theme.colors.primary.green};
  }

  &[placeholder] {
    font-size: 14px;
  }

  &[type="submit"] {
    background: ${theme.colors.gradients.dark};
    border: none;
    border-radius: 12px;
    box-shadow: ${theme.utility.boxShadowDown};
    width: 100%;
    
    &:hover {
      background: ${theme.colors.gradients.primary};
    }
  }
`;

export const Textarea = styled.textarea`
  margin-top: 10px;
  margin-bottom: 20px;
  background: rgba(0, 0, 0, .1);
  border-radius: 3px;
  border: none;
  border-bottom: 2px solid ${theme.colors.primary.lightGray};
  padding: 8px 5px;
  color: ${theme.colors.primary.lightGray};
  font-size: 14px;
  color: white;
  font-family: inherit;

  &:focus {
    outline: none;
    border-bottom: 2px solid ${theme.colors.primary.green};
  }
`;

export const Label = styled.label`
  position: relative;
  background: ${theme.colors.gradients.dark};
  border-radius: 12px;
  width: 38px;
  height: 45px;
  margin-right: 5px;

  > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Success = styled.div`
  margin-top: 30px;

  > div:first-child {
    margin-bottom: 5px;
  }
`;