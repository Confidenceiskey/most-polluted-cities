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

const UserInput = ({ onTextChange, country, handleSubmit, clearSearchBox, placeholderText }) => {
  return (
    <Form onSubmit={handleSubmit} autocomplete='on'>
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
