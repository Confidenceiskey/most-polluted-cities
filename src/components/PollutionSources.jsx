import React from 'react';
import styled from 'styled-components';
import City from '../assets/city-pollution.svg';
import Farming from '../assets/cow-pollution.svg';
import Image from '../styles/Image';
import IndustrialImg from '../assets/industrial-pollution.svg';

const PollutionContainer = styled.div`
  display: flex;
  max-width: 1600px;
  align-items: flex-end;
  margin: 0 auto -12px;
`;

const PollutionSources = () => {
  return (
    <PollutionContainer>
      {window.innerWidth > 467 ?
        <React.Fragment>
          <Image src={IndustrialImg} />
          <Image src={City} flexGrow={2} width='175px' height='175px' />
          <Image src={Farming} width='50px' height='50px' /> 
        </React.Fragment> :
        <React.Fragment>
          <Image src={IndustrialImg} width='85px' height='85px' />
          <Image src={City} flexGrow={2} width='110px' height='110px' />
          <Image src={Farming} width='35px' height='35px' /> 
        </React.Fragment>  
      }
    </PollutionContainer>
  );
}

export default PollutionSources;
