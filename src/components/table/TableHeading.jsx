import React from 'react';
import styled from 'styled-components';
import TableHeaderElement from './TableHeaderElement';

const HeadingRow = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  margin: 10px 0;
  padding: 5px 10px;
  border-radius: 10px;
`;

const TableHeadingRow = () => {
  return (
    <HeadingRow>
      <TableHeaderElement text='Rank' />
      <TableHeaderElement 
        text='City' 
        flex={3} 
        align='left' 
        paddingL='30px' 
      />
      <TableHeaderElement text='Pollution Index' fontSm='16px' />
    </HeadingRow>
  );
}

export default TableHeadingRow;
