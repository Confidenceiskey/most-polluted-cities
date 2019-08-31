import React from 'react';
import styled from 'styled-components';
import TableHeading from './TableHeading';
import TableBody from './TableBody';

const StyledTable = styled.div`
  margin: 0 0 20px;
  padding: 0;
  width: 100%;
  border: none;
`;

const Table = () => {
  return (
    <StyledTable>
      <TableHeading />
      <TableBody />
    </StyledTable>
  );
}

export default Table;
