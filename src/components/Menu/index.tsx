import { MenuElement } from "./style";

export default function Menu(): JSX.Element {
  return (
    <MenuElement>
      <div>
        <a href="#articles">Artigos</a>
        <a href="#about">Sobre</a>
      </div>
    </MenuElement>
  );
}
