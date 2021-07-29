import Pagination from "../Pagination";
import { ArticleTitle, Main, Container } from "./style";

export default function Articles(): JSX.Element {
  return (
    <Main id="articles">
      <Container>
        <ArticleTitle>Artigos</ArticleTitle>
        <Pagination />
      </Container>
    </Main>
  );
}
