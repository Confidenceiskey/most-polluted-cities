import React from 'react';
import styled from 'styled-components';

const HeaderElement = styled.div`
  background: #fff;
  color: #000;
  font-family: 'Roboto', 'Arial', sans-serif;
  font-size: 20px;
  font-weight: bold;
  padding: 5px 0;
  border-radius: 10px;
  word-wrap: 'normal';
  flex: ${props => props.flex || 2};
  text-align: ${props => props.align || 'center'};
  padding-left: ${props => props.paddingL || '0'};

  @media (max-width: 550px) {
    font-size: ${props => props.fontSm || '18px'};
  }

  @media (min-width: 1800px) {
    font-size: 28px;
    padding: 10px 0;
  }
`;

const TableHeaderElement = ({ text, flex, align, paddingL, fontSm }) => {
  return (
    <HeaderElement 
      flex={flex} 
      fontSm={fontSm} 
      align={align} 
      paddingL={paddingL}
    >
      {text}
    </HeaderElement>
  );
}

export default TableHeaderElement;
