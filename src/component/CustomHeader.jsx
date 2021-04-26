import React from 'react';
import styled from 'styled-components';
import logo from '../resources/logo.png';

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  border-bottom: 4px solid ${(props) => "#000"};
  justify-content: space-between;
  padding: 2.05em;
  background-color: #fff;
  color: #fff;

  @media screen and (max-width: 530px) {
    border-left: none;
    padding: 1em;
  }
`;

const Title = styled.div`
  color: black;
  font-family: arial;
  text-align: right;
  font-size: 28px;

  @media screen and (max-width: 530px) {
    color: black;
    font-family: Arial;
    text-align: right;
    font-size: 26px;
  }
`;


function CustomHeader() {
  return (
    <Wrapper>
      <img src={logo} style={{ width: "150px", height: "45px" }} alt={"logo"} />
      <Title>
        <b>Target Assessment</b>
      </Title>
    </Wrapper>
  );
}

export default CustomHeader;