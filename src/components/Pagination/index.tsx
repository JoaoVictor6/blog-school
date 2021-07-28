import { useState } from "react";

import {
  Container,
  ArticleBox,
  Thumb,
  ArticleInfo,
  PaginationDiv,
} from "./style";

export default function Pagination(): JSX.Element {
  const [pageNumber, setPageNumber] = useState(0);
  const articles = [
    [
      {
        introductionText: `Quando se trata de energia nuclear comumente vem à mente casos como
    Chernobyl, o caso de Goiânia e várias coisas que são negativas a
    ela, mas já pararam para pensar o motivo...`,
        thumbnail: "https://via.placeholder.com/147",
        title: "Debate sobre a energia nuclear",
      },
      {
        introductionText: `Quando se trata de energia nuclear comumente vem à mente casos como
    Chernobyl, o caso de Goiânia e várias coisas que são negativas a
    ela, mas já pararam para pensar o motivo...`,
        thumbnail: "https://via.placeholder.com/147",
        title: "Debate sobre a energia nuclear",
      },
      {
        introductionText: `Quando se trata de energia nuclear comumente vem à mente casos como
    Chernobyl, o caso de Goiânia e várias coisas que são negativas a
    ela, mas já pararam para pensar o motivo...`,
        thumbnail: "https://via.placeholder.com/147",
        title: "Debate sobre a energia nuclear",
      },
    ],
    [
      {
        introductionText: `Quando se trata de energia nuclear comumente vem à mente casos como
    Chernobyl, o caso de Goiânia e várias coisas que são negativas a
    ela, mas já pararam para pensar o motivo...`,
        thumbnail: "https://via.placeholder.com/147",
        title: "Debate sobre a energia nuclear",
      },
      {
        introductionText: `Quando se trata de energia nuclear comumente vem à mente casos como
    Chernobyl, o caso de Goiânia e várias coisas que são negativas a
    ela, mas já pararam para pensar o motivo...`,
        thumbnail: "https://via.placeholder.com/147",
        title: "Debate sobre a energia nuclear",
      },
    ],
  ];

  function handleNextPage() {
    if (pageNumber >= articles.length - 1) {
      setPageNumber(0);
    } else {
      setPageNumber(pageNumber + 1);
    }
  }
  function handlePreviousPage() {
    if (pageNumber <= 0) {
      setPageNumber(articles.length - 1);
    } else {
      setPageNumber(pageNumber - 1);
    }
  }

  return (
    <Container>
      {articles[pageNumber].map(({ thumbnail, title, introductionText }) => (
        <ArticleBox>
          <Thumb src={thumbnail} />
          <ArticleInfo>
            <h1>{title}</h1>
            <p>{introductionText}</p>
          </ArticleInfo>
        </ArticleBox>
      ))}

      <PaginationDiv>
        <button type="button" onClick={handlePreviousPage}>
          Anterior
        </button>
        <div>
          {pageNumber + 1} de {articles.length}
        </div>
        <button type="button" onClick={handleNextPage}>
          Próximo
        </button>
      </PaginationDiv>
    </Container>
  );
}
