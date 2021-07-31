import { useEffect, useState } from "react";
import { MenuElement } from "./style";

export default function Menu(): JSX.Element {
  const [bodyOffset, setBodyOffset] = useState(
    document.body.getBoundingClientRect()
  );
  const [scrollY, setScrollY] = useState(bodyOffset.top);

  const listener = () => {
    setBodyOffset(document.body.getBoundingClientRect());
    setScrollY(-bodyOffset.top);
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  });
  return (
    <MenuElement sticky={scrollY >= 400}>
      <div>
        <a href="#articles">Artigos</a>
        <a href="#about">Sobre</a>
      </div>
    </MenuElement>
  );
}
