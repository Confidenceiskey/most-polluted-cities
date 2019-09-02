import React, { Component } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import moment from 'moment';
import styled from 'styled-components';
import ContentBox from './ContentBox';
import { countryList } from '../countryList';
import ErrorHeader from './table/ErrorHeader';
import Table from './table/Table';
import Title from '../styles/Title';

//Styles
const Main = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0;
  height: 100%;
  margin-right: -50px; /* maximum width of scrollbar */
  padding-right: 50px; /* maximum width of scrollbar */
  overflow-y: scroll;
`;

// OPEN AIR QUALITY API CONSTANTS
const PATH_BASE = 'https://api.openaq.org/v1/measurements';
const PARAM_COUNTRY = 'country=';
const PARAM_POLLUTANT = 'parameter[]=';
const POLLUT1 = 'no2';
const POLLUT2 = 'o3';
const POLLUT3 = 'pm25';
const PARAM_DATE_FROM = 'date_from=';
const PARAM_ORDER_BY = 'order_by=';
const TYPE = 'city';
const PARAM_LIMIT = 'limit=';
const SET_HPS = '10000';

// WIKI API CONSTANTS
const WIKI_PATH_BASE = 'https://en.wikipedia.org/w/api.php';
const PARAM_ACTION = 'action=';
const QUERY = 'query';
const PARAM_PROP = 'prop=';
const EXTRACTS = 'extracts';
const PARAM_EXINTRO = 'exintro=';
const BOOL = 'true';
const PARAM_TITLE = 'titles=';
const FORMAT = 'format=';
const FORMAT_TYPE = 'json';
const PARAM_ORIGIN = 'origin=';
const ORIGIN = '*';

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: '',
      searchedCountry: '',
      ranking: 'empty',
      placeholderText: 'Select Country',
      isError: false,
      isLoading: false,
      displayErrMsg: 'none'
    }
  }

  onTextChange = (event) => {
    this.setState({
      country: event.target.value
    });

    const countries = [...Object.keys(countryList)];
    const countryLC = event.target.value.toLowerCase();

    if (this.state.displayErrMsg === 'block') {
      if (countries.includes(countryLC)) {
        this.setState({
          displayErrMsg: 'none'
        });
      }  
    }
  }

  clearSearchBox = () => {
    this.setState({
      country: '',
      placeholderText: 'Select Country'
    });
  }

  /*** OPEN AIR QUALITY API CALL, FUNCTIONS, & CALCULATIONS ***/
  sortDescending = (citiesObj) => {
    return [...citiesObj].sort((a, b) => {
      return b.pollutionIndex - a.pollutionIndex;
    });
  }

  calcPollutionIndex = (cities) => {
    // Based off a modified Air Quality Health Index calculation
    // used in Canada

    const A = (1000 / 10.4);
    const cO = 0.000537;
    const cNO = 0.000871;
    const cPM = 0.000487;

    //PI = Pollution Index
    const citiesWithPI = cities.map(city => {
      let avgO3;
      let avgNO2;
      let avgPM25;

      if (city.o3.length > 0) {
        avgO3 = city.o3.reduce((a, b) => (a + b)) / city.o3.length;
      } else {
        avgO3 = city.o3;
      }
      if (city.no2.length > 0) {
        avgNO2 = city.no2.reduce((a, b) => (a + b)) / city.no2.length;
      } else {
        avgNO2 = city.no2;
      }
      if (city.pm25.length > 0) {
        avgPM25 = city.pm25.reduce((a, b) => (a + b)) / city.pm25.length;
      } else {
        avgPM25 = city.pm25;
      }

      const AQI = (A * (Math.exp(cO * avgO3) - 1) 
        + (Math.exp(cNO * avgNO2) - 1) + (Math.exp(cPM * avgPM25) - 1));
      let roundedAQI;

      if (AQI < 1) {
        roundedAQI = 1;
      } else {
        roundedAQI = Math.round(AQI);
      }
      
      return {...city, pollutionIndex: roundedAQI};
    })
    .map(value => {
      return {
        city: value.city,
        pollutionIndex: value.pollutionIndex,
        description: '',
        isExpanded: false,
        isDescriptionError: false,
        isDescriptionLoading: false
      }
    });
    return this.sortDescending(citiesWithPI);
  }

  createCitiesList = (response) => {
    const { results } = response.data;
    let dataList = [];
    let pos = -1;

    if (results.length > 0) {
      results.forEach((result) => {
        if (pos === -1 || result.city !== dataList[pos].city) {
          dataList.push({
            city: result.city,
            no2: [],
            o3: [],
            pm25: [],
            pollutionIndex: null
          });
          pos += 1;
        } 

        if (result.city === dataList[pos].city) {
          dataList[pos][result.parameter].push(result.value);
        }
      });
    }
    return dataList;
  }

  getQueryDate = () => {
    return moment.utc().subtract(3, 'hours').format('YYYY-MM-DDTHH:mm:ss');
  }

  isCountryValid = (country) => {
    const countries = [...Object.keys(countryList)];
    const countryLC = country.toLowerCase();

    if (countries.includes(countryLC)) {
      this.setState({
        searchedCountry: countryLC.slice(0,1).toUpperCase() + countryLC.slice(1)
      })
      return countryList[countryLC];
    } else {
      this.setState({
        displayErrMsg: 'block'
      })
      return false;
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      isError: false,
      displayErrMsg: 'none'
    })
    const QUERY_COUNTRY = this.isCountryValid(this.state.country);
    const QUERY_DATE = this.getQueryDate();

    if (QUERY_COUNTRY !== false) {
      this.setState({
        isLoading: true,
      })
      axios(`${PATH_BASE}?` 
        + `${PARAM_COUNTRY}${QUERY_COUNTRY}&` 
        + `${PARAM_POLLUTANT}${POLLUT1}&` 
        + `${PARAM_POLLUTANT}${POLLUT2}&` 
        + `${PARAM_POLLUTANT}${POLLUT3}&` 
        + `${PARAM_DATE_FROM}${QUERY_DATE}&`
        + `${PARAM_ORDER_BY}${TYPE}&`
        + `${PARAM_LIMIT}${SET_HPS}`)
      .then(response => {
        const citiesList = this.createCitiesList(response);
        this.setState({
          ranking: this.calcPollutionIndex(citiesList).slice(0, 10),
          isLoading: false,
          placeholderText: this.state.searchedCountry
        });
      })
      .catch(err => {
        this.setState({
          isError: true,
          isLoading: false
        })
      });
    } 
  }


  /*** WIKI API CALL, FUNCTIONS & CALCULATIONS ***/

  showCityDescription = (event, city, pos) => {
    event.preventDefault();
    this.setState( prevState => ({
        ranking: prevState.ranking.map((entry) => {
          return (
            entry.city === city
            ?
            {...entry, isDescriptionError: false}
            :
            entry
          );
        })
      }));

    if (this.state.ranking[pos].description === '') {
      this.setState( prevState => ({
        ranking: prevState.ranking.map((entry) => {
          return (
            entry.city === city
            ?
            {...entry, isDescriptionLoading: true}
            :
            entry
          );
        })
      }));
      axios(`${WIKI_PATH_BASE}?${PARAM_ACTION}${QUERY}&`
        + `${PARAM_PROP}${EXTRACTS}&${PARAM_EXINTRO}${BOOL}&`
        + `${PARAM_TITLE}${city}&${FORMAT}${FORMAT_TYPE}&`
        + `${PARAM_ORIGIN}${ORIGIN}`) 
      .then(response => {
        const page = response.data.query.pages;
        const pageID = Object.keys(page)[0];

        this.setState( prevState => ({
          ranking: prevState.ranking.map((entry) => {
            return (
              entry.city === city
              ?
              {...entry, 
                description: page[pageID].extract.length > 0 ? page[pageID].extract : 'none', 
                isExpanded: true,
                isDescriptionLoading: false
              }
              :
              entry
            );
          })
        }));
      })
      .catch(err => {
        this.setState( prevState => ({
          ranking: prevState.ranking.map((entry) => {
            return (
              entry.city === city
              ?
              {...entry, 
                isDescriptionLoading: false,
                isDescriptionError: true
              }
              :
              entry
            );
          })
        }));
      });
    } else {
      this.setState( prevState => ({
        ranking: prevState.ranking.map((entry) => {
          return (
            entry.city === city 
            ? 
            {...entry, isExpanded: !this.state.ranking[pos].isExpanded}
            :
            entry
          );
        })
      }));
    }
  }

  render() {
    const { ranking, isError, isLoading } = this.state;
    return (
      <Main>
        <Title text='Most Polluted Cities' />
        <ContentBox 
          onTextChange={this.onTextChange} 
          handleSubmit={this.handleSubmit} 
          clearSearchBox={this.clearSearchBox}
          {...this.state} 
        />
        { !isError || ranking !== 'empty' || isLoading
            ? 
            isLoading 
              ? 
              <Loader 
                type='MutatingDots' 
                color='#fff' 
                height='100px'
                width='100px' 
              />
              : 
              <Table 
                showCityDescription={this.showCityDescription} 
                {...this.state} 
              />
            : 
            isError 
              ? 
              <ErrorHeader 
                text="Oops, your request couldn't be processed! 
                Please try again later." 
              />
              : 
              null
        }
      </Main>
    );
  }
}

export default MainContent;
