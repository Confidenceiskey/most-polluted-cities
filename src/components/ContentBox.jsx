import React from 'react';
import styled from 'styled-components';
import Image from '../styles/Image';
import MaskedMan from '../assets/masked-man.svg';

const Box = styled.div`
  display: flex;
  margin: 20px 0;
  width: 60vw;
  max-width: 800px;
  min-width: 320px;
  height: 250px;
  background: #fff;
  border-radius: 30px;

  @media (min-width: 1600px) {
    max-width: 1200px;
    height: 320px;
  }

  @media (min-width: 769px) and (max-width: 991px) {
    width: 80vw;
    height: 220px;
  }

  @media (min-width: 568px) and (max-width: 768px) {
    width: 90vw;
    height: 180px;
  }

  @media  (max-width: 567px) {
    width: 95vw;
    height: 180px;
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
    margin-left: 18px;
    width: 100px;
    height: 130px;
  }
`;

const WrittenContent = styled.div`
  flex-grow: 1;
  margin-left: 15px;
  background: #e6e6e6;
  border-radius: 0 30px 30px 0;
`;

const ContentBox = () => {
  return (
    <Box>
      <ImgContent>
        <Image src={MaskedMan} width='100%' height='auto' />
      </ImgContent>
      <WrittenContent />
    </Box>
  );
}

export default ContentBox;
