import axios from 'axios';
import moment from 'moment';
import { countryList } from '../countryList';

// API Request Values
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

const sortDescending = (citiesObj) => {
  return [...citiesObj].sort((a, b) => {
    return b.pollutionIndex - a.pollutionIndex;
  });
}

const calcPollutionIndex = (cities) => {
  // Based off a modified Air Quality Health Index calculation
  // used in Canada.

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
      pollutionIndex: value.pollutionIndex
    }
  });
  return this.sortDescending(citiesWithPI);
}

const createCitiesList = (response) => {
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

const getQueryDate = () => {
  return moment.utc().subtract(3, 'hours').format('YYYY-MM-DDTHH:mm:ss');
}

const isCountryValid = (country) => {
  const countries = [...Object.keys(countryList)];
  const countryLC = country.toLowerCase();

  if (countries.includes(countryLC)) {
    this.setState({
      searchedCountry: countryLC.slice(0,1).toUpperCase() + countryLC.slice(1)
    })
    return countryList[countryLC];
  } else {
    console.log('add in a div to indicate form error!');
    return false;
  }
}

const handleSubmit = (event, state) => {
  event.preventDefault();
  const QUERY_COUNTRY = isCountryValid(this.state.country);
  const QUERY_DATE = getQueryDate();
  this.setState({
    isError: false
  })

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
      const citiesList = createCitiesList(response);
      this.setState({
        ranking: calcPollutionIndex(citiesList).slice(0, 10),
        isLoading: false,
        country: '',
        placeholderText: this.state.searchedCountry
      });
    })
    .catch(err => {
      this.setState({
        isError: true,
        isLoading: false
      })
    });
  } else {
  }
}

export { PATH_BASE, PARAM_COUNTRY, PARAM_POLLUTANT, POLLUT1, POLLUT2, POLLUT3,
  PARAM_DATE_FROM, PARAM_ORDER_BY, TYPE, PARAM_LIMIT, SET_HPS, sortDescending,
  calcPollutionIndex, createCitiesList, getQueryDate, isCountryValid, 
  handleSubmit };