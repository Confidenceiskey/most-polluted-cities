import React from 'react';
import styled from 'styled-components';
import SubHeading from '../styles/SubHeading';
import UserForm from './UserForm';

const WrittenContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-left: 15px;
  background: #e6e6e6;
  border-radius: 0 30px 30px 0;
`;

const WrittenContentBox = (props) => {
  return (
    <WrittenContainer>
      <SubHeading 
        text='Select your country to see the 10 most currently polluted 
        cities' 
      />
      <UserForm {...props} />
    </WrittenContainer>
  );
}

export default WrittenContentBox;
