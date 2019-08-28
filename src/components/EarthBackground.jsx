import React from 'react';
import styled from 'styled-components';
import Grass from '../styles/Grass';
import PollutionSources from './PollutionSources';

const Earth = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: -1;
`;

const EarthBackground = () => {
  return (
    <Earth>
      <PollutionSources />
      <Grass />
    </Earth>
  );
}

export default EarthBackground;
