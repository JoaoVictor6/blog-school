import { Container, ArticleBox, Thumb, ArticleInfo } from "./style";

export default function Pagination(): JSX.Element {
  return (
    <Container>
      <ArticleBox>
        <Thumb src="https://via.placeholder.com/147" />
        <ArticleInfo>
          <h1>Debate sobre a energia nuclear</h1>
          <p>
            Quando se trata de energia nuclear comumente vem à mente casos como
            Chernobyl, o caso de Goiânia e várias coisas que são negativas a
            ela, mas já pararam para pensar o motivo...
          </p>
        </ArticleInfo>
      </ArticleBox>

      <ArticleBox>
        <Thumb src="https://via.placeholder.com/147" />
        <ArticleInfo>
          <h1>Debate sobre a energia nuclear</h1>
          <p>
            Quando se trata de energia nuclear comumente vem à mente casos como
            Chernobyl, o caso de Goiânia e várias coisas que são negativas a
            ela, mas já pararam para pensar o motivo...
          </p>
        </ArticleInfo>
      </ArticleBox>

      <ArticleBox>
        <Thumb src="https://via.placeholder.com/147" />
        <ArticleInfo>
          <h1>Debate sobre a energia nuclear</h1>
          <p>
            Quando se trata de energia nuclear comumente vem à mente casos como
            Chernobyl, o caso de Goiânia e várias coisas que são negativas a
            ela, mas já pararam para pensar o motivo...
          </p>
        </ArticleInfo>
      </ArticleBox>
    </Container>
  );
}
