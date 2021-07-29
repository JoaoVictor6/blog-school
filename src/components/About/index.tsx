import Button from "../Button";
import { AsideInfo, Container, ContactDiv } from "./style";

export function About(): JSX.Element {
  return (
    <Container id="about">
      <AsideInfo>
        <h1>Sobre o projeto</h1>
        <div />
      </AsideInfo>
      <ContactDiv>
        <p>
          Blog desenvolvido para o trabalho trimestral de fisica e biologia.
          Para mais informações sobre o site, clique em:
        </p>
        <Button
          whoIsLink="https://github.com/JoaoVictor6"
          target="_blank"
          rel="noopener noreferrer"
          placeholder="Saiba Mais"
        />
      </ContactDiv>
    </Container>
  );
}
