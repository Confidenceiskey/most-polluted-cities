import React from 'react';
import styled from 'styled-components';
import TableHeaderElement from './TableHeaderElement';

const HeadingRow = styled.div`
  display: flex;
  width: calc(100% - 50px);
  align-items: center;
  background: #fff;
  margin: 10px auto;
  padding: 5px 10px;
  border-radius: 10px;
`;

const ErrorHeader = ({ text }) => {
  return (
    <HeadingRow>
      <TableHeaderElement 
        text={text} 
        flex='auto' 
      />
    </HeadingRow>
  );
}

export default ErrorHeader;
