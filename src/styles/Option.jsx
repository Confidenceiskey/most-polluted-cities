import React from 'react';
import styled from 'styled-components';

const OptionItem = styled.option`
`;

const Option = ({ value }) => {
  return (
    <OptionItem value={value} />
  );
}

export default Option;
