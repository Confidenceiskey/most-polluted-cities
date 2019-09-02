import React from 'react';
import styled from 'styled-components';

const Land = styled.div`
  width: 100vw;
  height: 70px;
  background: #43ab5f;
  border-top: 20px solid #71be63;
`;

const Footer = styled.div`
  color: #24481e;
  margin: 8px 0 0 90px;
  font-size: 14px;
  text-align: center;

  @media (min-width: 1200px) {
    font-size: 15px;
  }

  @media (max-width: 567px) {
    margin-left: 0;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: #71be63;
`;

const Grass = () => {
  return (
    <Land>
      <Footer>Designed By David Nowak &copy; 2019
      </Footer>
      <Footer>
        Icons by {` `} 
          <Link 
            href='www.flaticon.com' 
            target='_blank'
          >
            Flaticon.
          </Link>
          {` `} See {` `}
          <Link 
            href='https://github.com/Confidenceiskey/most-polluted-cities#most-polluted-cities' 
            target='_blank'
          >
            Authors.
          </Link>
      </Footer>
    </Land>
  );
}

export default Grass;
