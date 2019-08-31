import React from 'react';
import styled from 'styled-components';

const Element = styled.div`
  color: #000;
  font-family: 'Roboto', 'Arial', sans-serif;
  font-size: 19px;
  font-weight: 300;
  padding: 5px 0;
  word-wrap: 'normal';
  flex: ${props => props.flex || 2};
  text-align: ${props => props.align || 'center'};
  padding-left: ${props => props.paddingL || '0'};

  @media (max-width: 550px) {
    font-size: 17px;
  }

  @media (min-width: 1800px) {
    font-size: 26px;
    padding: 10px 0;
  }
`;

const TableElement = ({ text, flex, align, paddingL }) => {
  return (
    <Element 
      flex={flex} 
      align={align} 
      paddingL={paddingL}
    >
      {text}
    </Element>
  );
}

export default TableElement;
