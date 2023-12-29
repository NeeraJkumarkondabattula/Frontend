import React from "react";
import amazon from "../assets/amazon.png";
import flipkart from "../assets/flipkart.png";
import shoe from "../assets/shoe_image.png";
import styled from "styled-components";

const Brand = () => {
  const data = {
    content: "YOUR FEET DESERVE THE BEST",
    discription:
      "YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.",
  };
  return (
    <Container>
      <div className="brand">
        <div className="content">
          <div className="heading">
            <h1>{data.content}</h1>
          </div>
          <div className="discription">
            <h4>{data.discription}</h4>
          </div>
          <div className="buttons">
            <button className="btn1">Shop Now</button>
            <button className="btn2">Category</button>
          </div>
          <div className="promotion">
            <p>Also Available On</p>
            <div className="logos">
              <img src={flipkart} alt="" />
              <img src={amazon} alt="" />
            </div>
          </div>
        </div>
        <div className="image">
          <img src={shoe} alt="" />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 72px;
  .brand {
    width: 1125px;
    height: 613px;
    display: flex;
    align-items: center;
    .content {
      width: 595px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .heading {
        width: 100%;
        height: 306px;
        h1 {
          font-size: 108px;
          font-weight: 800;
          line-height: 102px;
        }
      }
      .discription {
        width: 404px;
        height: 91px;
        h4 {
          font-size: 16px;
          font-weight: 600;
          line-height: 24px;
          color: #5a5959;
        }
      }
      .buttons {
        width: 331px;
        height: 41px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .btn1 {
          padding: 6px 16px;
          font-weight: 600;
          font-size: 24px;
          color: white;
          line-height: 29.05px;
          background-color: #d01c28;
          border: none;
          outline: none;
        }
        .btn2 {
          padding: 6px 16px;
          font-weight: 600;
          font-size: 24px;
          color: #5a5959;
          background-color: white;
          line-height: 29.05px;
          border: 1px solid black;
          outline: none;
        }
      }
      .promotion {
        width: 131px;
        height: 67px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        p {
          font-family: inter;
          font-size: 16px;
          font-weight: 400;
          line-height: 19.36px;
          color: #5a5959;
        }
        .logos {
          width: 80px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          img {
            width: 32px;
            height: 30px;
          }
        }
      }
    }
    .image {
      width: 530px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 100%;
      }
    }
  }
`;

export default Brand;
