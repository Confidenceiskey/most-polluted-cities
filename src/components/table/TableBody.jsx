import React from 'react';
import styled from 'styled-components';
import TableRow from './TableRow';

const StyledTableBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const TableBody = () => {
  return (
    <StyledTableBody>
      <TableRow 
        textLeft='1' 
        textCenter='Warsaw' 
        textRightTop='6' 
      />
      <TableRow 
        textLeft='2' 
        textCenter='Katowice' 
        textRightTop='6' 
      />
      <TableRow 
        textLeft='3' 
        textCenter='Warsaw' 
        textRightTop='5' 
      />
    </StyledTableBody>
  );
}

export default TableBody;
