import React from 'react';
import styled from 'styled-components';
import TableElement from './TableElement';

const BodyRow = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  margin: 10px 0;
  padding: 8px 10px;
  border-radius: 12px;
`;

const TableRow = ({ textLeft, textCenter, textRight, rangeZone }) => {
  return (
    <BodyRow>
      <TableElement text={textLeft} />
      <TableElement 
        text={textCenter} 
        flex={3} 
        align='left' 
        paddingL='30px' 
      />
      <TableElement text={textRight} rangeZone={rangeZone} />
    </BodyRow>
  );
}

export default TableRow;
