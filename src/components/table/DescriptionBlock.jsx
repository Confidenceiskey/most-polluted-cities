import React from 'react';
import styled from 'styled-components';

const DescriptionPopdown = styled.div`
  display: flex;
  flex-direction: column;
  width: 78%
  align-items: center;
  background: #e6e6e6;
  margin: -10px auto 0;
  padding: 15px 15px;
  border-radius: 0;
`;

const DescriptionBlock = ({ bodyText }) => {
  return (
    <DescriptionPopdown
      dangerouslySetInnerHTML={{ __html: bodyText }}
    />
  );
}

export default DescriptionBlock;
