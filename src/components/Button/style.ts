import styled from "styled-components";

interface ButtonProps {
  transparent: boolean;
}

export const ButtonElement = styled.a`
  text-decoration: none;
  display: block;
  border-style: none;
  width: 370px;
  border: 3px solid #fff;
  border-radius: 50px;
  background: ${({ transparent }: ButtonProps) =>
    transparent ? "rgba(1, 5, 6, 0.34)" : "#2E2E2E"};
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    background: ${({ transparent }: ButtonProps) =>
      transparent ? "rgba(1, 5, 6, 0.5)" : "#2E2E2E"};
    box-shadow: ${({ transparent }: ButtonProps) =>
      transparent
        ? "0px 4px 19px 0px rgba(250,171,5,0)"
        : "0px 4px 19px 0px rgba(250,171,5,0.80)"};

    border-color: ${({ transparent }: ButtonProps) =>
      transparent ? "#fff" : "transparent"};
  }

  &:active {
    transform: scale(1.01);
  }
`;

export const Container = styled.div`
  margin: 16px 32px;
  display: flex;
  justify-content: space-between;

  & > p {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 24px;
    color: #eef8f7;
  }

  > svg path {
    stroke: #eef8f7;
  }
`;
