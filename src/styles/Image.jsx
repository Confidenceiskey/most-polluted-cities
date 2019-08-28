import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  display: flex;
  width: ${props => props.width || '140px'};
  height: ${props => props.height || '140px'};
  flex-grow: ${props => props.flexGrow || 1};
`;

const Image = ({ width, height, src, flexGrow }) => {
  return (
    <Img 
      width={width} 
      height={height} 
      src={src} 
      flexGrow={flexGrow} 
    />
  );
}

export default Image;
