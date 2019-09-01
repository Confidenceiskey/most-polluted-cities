import React from 'react';
import styled from 'styled-components';
import ErrorHeader from './ErrorHeader';
import TableHeading from './TableHeading';
import TableBody from './TableBody';

const StyledTable = styled.div`
  margin: 0 0 20px;
  padding: 0;
  width: 100%;
  border: none;
`;

const Table = (props) => {
  const { ranking, searchedCountry } = props;
  return (
    <StyledTable>
      { ranking !== 'empty' && ranking.length !== 0
        ?
        <React.Fragment>
          <TableHeading />
          <TableBody {...props} />
        </React.Fragment>
        : 
          ranking.length === 0 
          ? 
          <ErrorHeader 
            text={`No data was found for ${searchedCountry} in the past 3 hours! Please try again later.`}
          />
          :
          null
      }
    </StyledTable>
  );
}

export default Table;
