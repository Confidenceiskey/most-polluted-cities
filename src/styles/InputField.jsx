import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  
  max-width: 300px;
  margin-top: 10px;
  height: 22px;
  padding: 8px 15px;
  background: #fff;
  border-radius: 10px;
  border: none;
  font-size: 18px;

  :active, :focus {
    outline: none;
  }

  ::-webkit-input-placeholder { /* Edge */
    color: #bfbfbf;
    font-style: italic;
  }

  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: #bfbfbf;
    font-style: italic;
  }

  ::placeholder {
    color: #bfbfbf;
    font-style: italic;
  }

  @media (min-width: 1200px) {
    width: 375px;
  }

  @media (max-width: 667px) {
    width: 170px;
    height: 18px;
    font-size: 15px;
  }
`;

const InputField = ({ type, name, id, onChange, placeholder, list }) => {
  return (
    <Input
      placeholder={placeholder}
      list={list}
      key={id} 
      type={type} 
      name={name} 
      id={id} 
      onChange={onChange} 
      required 
    />
  );
}

export default InputField;
