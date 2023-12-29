import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import brand_logo from "../assets/brand_logo.png";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Container>
      <div className="logo">
        <img src={brand_logo} alt="" />
      </div>
      <div className="menu">
        <p>Menu</p>
        <p>Location</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <div className="button">
        <button>Login</button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 72px;
  padding: 0 85px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  .logo {
    width: 76px;
    height: 42.75px;
    img {
      width: 100%;
    }
  }
  .menu {
    width: 333px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      font-size: 16px;
      font-weight: 600;
      text-transform: uppercase;
    }
  }
  .button {
    display: flex;
    align-items: center;
    gap: 2rem;
    justify-content: space-between;
    button {
      padding: 6px 16px;
      font-size: 16px;
      font-weight: 600;
      background-color: #d01c28;
      color: white;
      border: none;
      outline: none;
      line-height: 19.36px;
    }
  }
`;

export default Navbar;
