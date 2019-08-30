import React from 'react';
import styled from 'styled-components';
import Option from './Option';
import { countryList } from '../countryList';

const List = styled.datalist`
`;

const DataList = ({ id }) => {
  return (
    <List id={id}>
      {Object.keys(countryList).map( country => {
        return (
          <Option 
            key={country} 
            value={`${country.slice(0, 1).toUpperCase()}${country.slice(1)}`} 
          />
        );
      })}
    </List>
  );
}

export default DataList;
