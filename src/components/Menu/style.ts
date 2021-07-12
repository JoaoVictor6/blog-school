import styled from "styled-components";

export const MenuElement = styled.menu`
  width: 100vw;
  background: rgba(46, 46, 46, 0.26);
  position: absolute;
  top: 0;

  > div {
    display: flex;
    justify-content: space-between;
    width: 980px;
    max-width: 980px;
    margin: 0 auto;

    a {
      all: none;
      text-decoration: none;
      padding: 16px 0 16px 0;
      color: #fff;
      text-transform: capitalize;
      font-family: "Poppins", sans-serif;
      font-size: 32px;
      font-weight: 500;

      &:active {
        filter: brightness(0.9);
      }
    }
  }
`;
