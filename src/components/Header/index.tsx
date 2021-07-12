import Button from "../Button";
import { Container, HeaderInfo } from "./style";

export default function Header(): JSX.Element {
  return (
    <Container>
      <HeaderInfo>
        <h1>Energia nuclear</h1>
        <h2>Artigos e curiosidade</h2>
        <Button placeholder="Saiba Mais" />
      </HeaderInfo>
    </Container>
  );
}
