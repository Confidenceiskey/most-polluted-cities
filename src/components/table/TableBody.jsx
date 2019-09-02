import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';
import TableRow from './TableRow';
import DescriptionBlock from './DescriptionBlock';
import ErrorBlock from './ErrorBlock';

const StyledTableBody = styled.div`
  display: flex;
  flex-direction: column;
`;

class TableBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityList: ''
    }
  }

  calcScaleRange = (PI) => {
    if (PI <= 3) {
      return '(low)'
    } else if (PI <= 6) {
      return '(mod)'
    } else if (PI <= 10) {
      return '(high)'
    } else {
      return '(very high)'
    }
  }

  render() {
    const { ranking, showCityDescription } = this.props;
    return (
      <StyledTableBody>
        {ranking.map((city, i) => {
          return (
            <React.Fragment key={`${city.city}_content`}>
              <TableRow
                key={city.city}
                textLeft={i + 1}
                textCenter={city.city}
                textRight={city.pollutionIndex}
                rangeZone= {this.calcScaleRange(city.pollutionIndex)}
                showCityDescription={(event) => showCityDescription(event, city.city, i)}
              />
              {!city.isDescriptionError || city.isExpanded || city.isDescriptionLoading
                ?
                  city.isDescriptionLoading
                    ? 
                    <Loader 
                      type='MutatingDots' 
                      color='#fff' 
                      height='100px'
                      width='100px' 
                      style={{textAlign: 'center'}}
                    />
                    :
                    city.isExpanded 
                      ?
                      <DescriptionBlock key={`${city.city}_popdown`} bodyText={city.description} />
                      :
                      null 
                :
                  city.isDescriptionError
                    ?
                    <ErrorBlock 
                      key={`${city.city}_error`} 
                      errorMsg="Oops, your request couldn't be processed! 
                      Please try again later." 
                    /> 
                    :
                    null
              }
            </React.Fragment>
          );
        })}
      </StyledTableBody>
    );
  }
}

export default TableBody;
