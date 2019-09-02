import React from 'react';
import styled from 'styled-components';
import Button from '../styles/Button';
import DataList from '../styles/DataList';
import InputField from '../styles/InputField';

// Styles
const Form = styled.form`
 
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-grow: 3;
  margin: 5px 12px 10px;
  padding: 0;
  font-family: 'Roboto', 'Arial', serif;
`;

const ErrorPopup = styled.div`
  display: ${props => props.displayErr || 'none'};
  width: 100%;
  font-family: 'Roboto', 'Arial', serif;
  margin: 0 0 -8px;
  padding: 0;
  font-size: 12px;
  color: red;

  @media (min-width: 1200px) {
    font-size: 16px;
  }
  @media (min-width: 568px) {
    padding-left: 20px;
  }
  @media (min-width: 490px) and (max-width: 567px) {
    padding-left: 5px;
  }
`;

const UserInput = ({ onTextChange, country, handleSubmit, clearSearchBox, 
  placeholderText, displayErr, displayErrMsg }) => {
  return (
    <Form onSubmit={handleSubmit} autocomplete='on'>
      <ErrorPopup displayErr={displayErrMsg}>
        Please enter a valid country from the list!
      </ErrorPopup>
      <InputField
        placeholder={placeholderText}
        list='countries'
        type='country' 
        name='country'
        id='country' 
        value={country} 
        onChange={onTextChange}
        onClick={() => clearSearchBox()} 
      />
      <DataList id='countries' />
      <Button text='Find Cities' type='submit' />
    </Form>
  );
}

export default UserInput;
