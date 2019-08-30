import React from 'react';
import styled from 'styled-components';

const Heading = styled.h2`
  flex-grow: 2;
  margin: 20px 30px 10px;
  padding: 0;
  font-family: 'Roboto', 'Arial', serif;
  font-size: 3.5vw;
  font-weight: 300;
  color: #000;

  @media (min-width: 1901px) {
    font-size: 44px;
  }

  @media (min-width: 800px) and (max-width: 1900px) {
    font-size: 28px;
  }

  @media (min-width: 490px) and (max-width: 567px) {
    margin: 12px 15px 6px;
    font-size: 18px;
  }

  @media (min-width: 360px) and (max-width: 489px) {
    margin: 10px 12px 5px;
    font-size: 16px;
  }

  @media (max-width: 359px) {
    margin: 10px 12px 5px;
    font-size: 14px;
  }

  @media screen and (orientation: landscape) and (max-height: 450px) {
    font-size: 2.7vw;
  }
`;

const SubHeading = ({ text }) => {
  return (
    <Heading>{text}</Heading>
  );
}

export default SubHeading;
