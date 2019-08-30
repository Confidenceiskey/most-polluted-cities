import React, { Component } from 'react';
import styled from 'styled-components';
import City from '../assets/city-pollution.svg';
import Farming from '../assets/cow-pollution.svg';
import Image from '../styles/Image';
import IndustrialImg from '../assets/industrial-pollution.svg';

const PollutionContainer = styled.div`
  display: flex;
  max-width: 1600px;
  align-items: flex-end;
  margin: 0 auto -12px;
`;

class PollutionSources extends Component {
  constructor() {
    super();
    this.state = {
      multiplier: 1
    }
  }

  checkScreenSize = () => {
    if (window.innerWidth > 467) {
      this.setState({
        multiplier: 1
      })
    } else {
      this.setState({
        multiplier: 0.65
      })
    }
  }

  calcImgSize = (dimension, multiplier) => {
    return `${(dimension * multiplier)}px`;
  }

  componentDidMount = () => {
    this.checkScreenSize();
    window.addEventListener("resize", this.checkScreenSize);
  }

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.checkScreenSize);
  }

  render() {
    const { multiplier } = this.state;
    return (
      <PollutionContainer>
        <React.Fragment>
          <Image 
            src={IndustrialImg} 
            height={this.calcImgSize(140, multiplier)} 
            width={this.calcImgSize(140, multiplier)}
          />
          <Image 
            src={City} 
            flexGrow={2} 
            height={this.calcImgSize(175, multiplier)} 
            width={this.calcImgSize(175, multiplier)}
          />
          <Image 
            src={Farming} 
            height={this.calcImgSize(50, multiplier)}  
            width={this.calcImgSize(50, multiplier)}
          /> 
        </React.Fragment> 
      </PollutionContainer>
    );
  }
}

export default PollutionSources;

