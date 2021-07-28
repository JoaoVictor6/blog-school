import Header from "../../components/Header";
import { Container } from "./style";
import Menu from "../../components/Menu";
import Articles from "../../components/Articles";

export default function Home(): JSX.Element {
  return (
    <Container>
      <Menu />
      <Header />
      <Articles />
    </Container>
  );
}
