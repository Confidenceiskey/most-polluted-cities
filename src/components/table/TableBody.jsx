import React from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';
import TableRow from './TableRow';
import DescriptionBlock from './DescriptionBlock';
import ErrorBlock from './ErrorBlock';

const StyledTableBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const calcScaleRange = (PI) => {
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

const TableBody = ({ ranking, showCityDescription }) => {
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
              rangeZone= {calcScaleRange(city.pollutionIndex)}
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
                      city.description === '' 
                        ?
                        <ErrorBlock 
                          key={`${city.city}_noInfo`} 
                          errorMsg="Unfortunately no city description could be found." 
                        /> 
                        :
                        city.description !== 'none'
                          ?
                          <DescriptionBlock 
                            key={`${city.city}_popdown`} 
                            bodyText={city.description} 
                          />
                          :
                          null
                    :
                      city.description === 'none'
                        ?
                        <ErrorBlock 
                          key={`${city.city}_noInfo`} 
                          errorMsg="Unfortunately no city description could be found." 
                        /> 
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

export default TableBody;
