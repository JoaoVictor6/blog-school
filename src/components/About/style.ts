import styled from "styled-components";
import aboutImg from "../../assets/img/about.jpg";

export const Container = styled.div`
  background: #f6f6f6;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 70px;
`;

export const AsideInfo = styled.div`
  width: 505px;
  display: flex;
  & > h1 {
    font-family: "Poppins", sans-serif;
    font-size: 96px;
    font-weight: 700;
    color: #faab05;
    position: absolute;
    width: 438px;
  }
  & > div {
    margin-left: 220px;
    width: 291px;
    height: 478px;

    background-image: url(${aboutImg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export const ContactDiv = styled.div`
  width: 570px;
  display: flex;
  flex-direction: column;

  & > p {
    font-weight: 500;
    font-size: 30px;
    padding-bottom: 50px;
    color: #2e2e2e;
  }

  a {
    margin-right: 16px;
    align-self: flex-end;
  }
`;
