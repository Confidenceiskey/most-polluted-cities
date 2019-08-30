import React, { Component } from 'react';
//import axios from 'axios';
import moment from 'moment';
import styled from 'styled-components';
import Button from '../styles/Button';
import { countryList } from '../countryList';
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

// API Request Values
// const PATH_BASE = 'https://api.openaq.org/v1/measurements';
// const PARAM_COUNTRY = 'country=';
// const PARAM_POLLUTANT = 'parameter[]=';
// const POLLUT1 = 'no2';
// const POLLUT2 = 'o3';
// const POLLUT3 = 'pm25';
// const PARAM_DATE_FROM = 'date_from=';
// const PARAM_ORDER_BY = 'order_by=';
// const TYPE = 'city';
// const PARAM_LIMIT = 'limit=';
// const SET_HPS = '10000';
// const url = `${PATH_BASE}?${PARAM_COUNTRY}`;

class UserInput extends Component {
  constructor() {
    super();
    this.state = {
      country: ''
    }
  }

  onTextChange = (event) => {
    this.setState({
      country: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const QUERY_COUNTRY = this.checkCountry(this.state.country);
    const QUERY_DATE = this.getQueryDate();
    //axios();
  }

  checkCountry = (country) => {
    const countries = [...Object.keys(countryList)];
    const countryLC = country.toLowerCase();

    if (countries.includes(countryLC)) {
      return countryList[countryLC];
    } else {
      console.log('add in a div to indicate form error!');
      return false;
    }
  }

  getQueryDate = () => {
    return moment.utc().subtract(3, 'hours').format('YYYY-MM-DDTHH:mm:ss');
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} autocomplete='on'>
        <InputField
          placeholder='Select Country'
          list='countries'
          type='country' 
          name='country'
          id='country' 
          value={this.state.country} 
          onChange={this.onTextChange} 
        />
        <DataList id='countries' />
        <Button text='Find Cities' type='submit' />
      </Form>
    );
  }
}

export default UserInput;
