import { useEffect, useState } from "react";
import { MenuElement } from "./style";

export default function Menu(): JSX.Element {
  const [scrollY, setScrollY] = useState(0);
  
  const [bodyOffset, setBodyOffset] = useState({} as DOMRect);
  
  useEffect(() => {
    setBodyOffset(document.body.getBoundingClientRect())
    
    const listener = () => {
      setScrollY(-bodyOffset.top);
    };
    
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
