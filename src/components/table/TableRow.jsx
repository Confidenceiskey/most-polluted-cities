import React from 'react';
import styled from 'styled-components';
import TableElement from './TableElement';
// import TableElementSpecial from './TableElementSpecial';

const BodyRow = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  margin: 10px 0;
  padding: 8px 10px;
  border-radius: 12px;
`;

const TableRow = ({ textLeft, textCenter, textRightTop }) => {
  return (
    <BodyRow>
      <TableElement text={textLeft} />
      <TableElement 
        text={textCenter} 
        flex={3} 
        align='left' 
        paddingL='30px' 
      />
      <TableElement text={textRightTop} fontSm='16px' />
    </BodyRow>
  );
}

export default TableRow;
