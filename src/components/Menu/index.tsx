import { Link } from "react-router-dom";
import { MenuElement } from "./style";

export default function Menu(): JSX.Element {
  return (
    <MenuElement>
      <div>
        <a href="#articles">Artigos</a>
        <Link to="/">Sobre</Link>
      </div>
    </MenuElement>
  );
}
