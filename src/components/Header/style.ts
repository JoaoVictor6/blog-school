import styled from "styled-components";
import backgroundImg from "../../assets/img/header.jpg";

export const Container = styled.header`
  height: 100vh;

  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-position: center;
`;

export const HeaderInfo = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  padding-top: 300px;
  padding-left: 108px;

  > h1 {
    font-size: 80px;
    color: #fff;
  }

  > h2 {
    color: #fff;
    margin-top: 22px;
    font-size: 48px;
    margin-bottom: 17px;
  }
`;
