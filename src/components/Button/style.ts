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
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({ transparent }: ButtonProps) =>
      transparent ? "rgba(1, 5, 6, 0.5)" : "#2E2E2E"};
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
