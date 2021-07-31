import styled from "styled-components";

export const Container = styled.div`
  margin-top: 16px;
  margin-left: 29px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Thumb = styled.img`
  border-radius: 5px;
  width: 110px;
  margin: 12px;
  margin-right: 18px;
`;

export const ArticleBox = styled.article`
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.01);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.02);
  box-shadow: 0 1px 12px 0 rgba(0, 0, 0, 0.12);
  transition: box-shadow 1s;
  transition: transform 0.5s;
  display: flex;

  &:hover {
    cursor: pointer;
    box-shadow: 0 1px 12px 0 rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: scale(1.01);
  }
`;

export const ArticleInfo = styled.div`
  margin: 12px 12px 12px 0;

  > h1 {
    margin: 0;
    margin-bottom: 12px;
    font-family: "Rubik";
    font-size: 22px;
    font-weight: 500;
  }

  > p {
    font-size: 18px;
    margin: 0;
  }
`;

export const PaginationDiv = styled.div`
  display: flex;
  margin: 0 auto;
  color: #263238;
  > * {
    font-size: 16px;
    border-style: none;
    border: 1px solid #c4c4c4;
    background: #fff;
  }

  div {
    font-size: 18px;
    padding: 7px 32px;
  }

  button {
    padding: 6px 35px;
    cursor: pointer;
  }

  button:first-child {
    border-radius: 5px 0 0 5px;
  }
  button:last-child {
    border-radius: 0 5px 5px 0;
  }
`;
