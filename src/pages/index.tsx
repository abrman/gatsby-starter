import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  position: absolute;
  font-family: "Work Sans", sans-serif;
  color: #663399;
  text-align: center;
  width: 100%;
`;

const HomePage = () => {
  return <Title>Hello Gatsby!</Title>;
};

export default HomePage;
