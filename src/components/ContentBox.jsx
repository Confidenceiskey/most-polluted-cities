import React from 'react';
import styled from 'styled-components';
import Image from '../styles/Image';
import MaskedMan from '../assets/masked-man.svg';
import WrittenContentBox from './WrittenContentBox';

const Box = styled.div`
  display: flex;
  margin: 20px 0;
  width: 100%;
  min-height: 250px;
  background: #fff;
  border-radius: 30px;

  @media (min-width: 1600px) {
    min-height: 320px;
  }
  @media (min-width: 769px) and (max-width: 991px) {
    min-height: 220px;
  }
  @media (min-width: 568px) and (max-width: 768px) {
    min-height: 180px;
  }
  @media  (max-width: 567px) {
    min-height: 180px;
  }
  @media screen and (max-height: 650px) and (orientation: portrait) {
    min-height: 160px;
  }
`;

const ImgContent = styled.div`
  display: flex;
  align-items: flex-end;
  margin: auto 0 0 14px;
  width: 200px;
  height: 250px;

  @media (min-width: 1600px) {
    width: 280px;
    height: 320px;
  }
  @media (min-width: 769px) and (max-width: 991px) {
    width: 190px;
    height: 220px;
  }
  @media (min-width: 568px) and (max-width: 768px) {
    width: 150px;
    height: 180px;
  }
  @media (max-width: 567px) {
    margin-left: 25px;
    width: 100px;
    height: 130px;
  }
`;

const ContentBox = (props) => {
  return (
    <Box>
      <ImgContent>
        <Image src={MaskedMan} width='100%' height='auto' />
      </ImgContent>
      <WrittenContentBox {...props} />
    </Box>
  );
}

export default ContentBox;
