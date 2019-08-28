import React from 'react';
import styled from 'styled-components';
import ContentBox from './ContentBox';
import Title from '../styles/Title';

const Main = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0;
  margin: 0;
`;

const MainContent = () => {
  return (
    <Main>
      <Title text='Most Polluted Cities' />
      <ContentBox />
    </Main>
  );
}

export default MainContent;
