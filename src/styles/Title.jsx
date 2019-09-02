import React from 'react';
import styled from 'styled-components';

const Header = styled.h1`
  position: relative;
  margin: 25px 0;
  padding: 0;
  font-family: 'Roboto', 'Arial', serif;
  font-size: 8vmin;
  font-weight: 500;
  color: #e6e6e6;

  @media (min-width: 991px) and (max-height: 500px) {
    font-size: 40px;
  }

  @media (min-width: 568px) and (max-width: 990px) and (max-height: 500px) {
    font-size: 32px;
  }

  @media (max-width: 567px) and (max-height: 500px) {
    font-size: 24px;
  }
`;

const Title = ({ text }) => {
  return (
    <Header>{text}</Header>
  );
}

export default Title;
