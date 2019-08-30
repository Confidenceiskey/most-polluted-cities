import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: orange;
  width: 120px;
  height: 35px;
  color: #000;
  font-size: 19px;
  padding: 5px;
  margin: 10px 15px 0;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  :focus {
    outline: none;
  }

  :hover {
    opacity: 0.7;
  }

  @media (max-width: 667px) {
    width: 100px;
    height: 32px;
    font-size: 16px;
  }
`;

const Button = ({ text }) => {
  return (
    <StyledButton>{text}</StyledButton>
  );
}

export default Button;
