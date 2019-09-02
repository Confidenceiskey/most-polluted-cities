import React from 'react';
import styled from 'styled-components';

const ErrorPopdown = styled.div`
  display: flex;
  flex-direction: column;
  width: 78%
  align-items: center;
  background: #e6e6e6;
  margin: -10px auto 0;
  padding: 15px 15px;
  border-radius: 0;
`;

const ErrorBlock = ({ errorMsg }) => {
  return (
    <ErrorPopdown>{errorMsg}</ErrorPopdown>
  );
}

export default ErrorBlock;
