import styled from "styled-components";

type MenuElementProps = {
  sticky?: boolean;
};

export const MenuElement = styled.menu`
  width: 100%;
  display: block;
  background: ${({ sticky }: MenuElementProps) =>
    sticky ? "rgba(250, 171, 5, 0.73)" : "rgba(46, 46, 46, 0.26)"};

  position: ${({ sticky }: MenuElementProps) =>
    sticky ? "fixed" : "absolute"};
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
      padding: 12px 0 12px 0;
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
