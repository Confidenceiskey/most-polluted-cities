import React from 'react';
import styled from 'styled-components';
import TableRow from './TableRow';

const StyledTableBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const calcScaleRange = (PI) => {
  if (PI <= 3) {
    return '(low)'
  } else if (PI <= 6) {
    return '(mod)'
  } else if (PI <= 10) {
    return '(high)'
  } else {
    return '(very high)'
  }
}

const TableBody = ({ ranking }) => {
  return (
    <StyledTableBody>
      {ranking.map((city, i) => {
        return (
          <TableRow
            key={city.city}
            textLeft={i + 1}
            textCenter={city.city}
            textRight={city.pollutionIndex}
            rangeZone= {calcScaleRange(city.pollutionIndex)}
          />
        );
      })}
    </StyledTableBody>
  );
}

export default TableBody;
