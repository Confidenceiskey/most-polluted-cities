import React from 'react';
import styled from 'styled-components';

const ScrollZone = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  height: calc(100vh - 70px);
  width: 60vw;
  max-width: 800px;
  min-width: 320px;
  margin: 0 auto;

  @media (min-width: 1600px) {
    max-width: 1200px;
  }
  @media (min-width: 769px) and (max-width: 991px) {
    width: 80vw;
  }
  @media (min-width: 568px) and (max-width: 768px) {
    width: 90vw;
  }
  @media  (max-width: 567px) {
    width: 95vw;
  }
`;

const ScrollWindow = (props) => {
  return (
    <ScrollZone>
    {props.children}
    </ScrollZone>
  );
}

export default ScrollWindow;
