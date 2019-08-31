import React from 'react';
import styled from 'styled-components';
import ContentBox from './ContentBox';
import Table from './table/Table';
import Title from '../styles/Title';

const Main = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0;
  height: 100%;
  margin-right: -50px; /* maximum width of scrollbar */
  padding-right: 50px; /* maximum width of scrollbar */
  overflow-y: scroll;
`;

const MainContent = () => {
  return (
    <Main>
      <Title text='Most Polluted Cities' />
      <ContentBox />
      <Table />
    </Main>
  );
}

export default MainContent;
