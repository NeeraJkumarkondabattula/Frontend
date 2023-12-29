import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Brand from "./Brand";

const Layout = () => {
  return (
    <Container>
      <Navbar />
      <Brand />
    </Container>
  );
};

const Container = styled.div`
  width: 1440px;
  height: 856px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: white;
`;

export default Layout;
