import Header from "../../components/Header";
import { Container } from "../../components/Header/style";
import Menu from "../../components/Menu";

export default function Home(): JSX.Element {
  return (
    <Container>
      <Menu />
      <Header />
    </Container>
  );
}
