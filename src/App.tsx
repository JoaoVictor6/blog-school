import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import GlobalStyle from "./GlobalStyle";

function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
