import GloblaStyle from "./styles/global"
import theme from "./styles/theme";
import { ThemeProvider } from "styled-components";
import Routes from "./routes";
import { Router } from "react-router";
import history from "./services/history";
import ContextProvider from "./contexts";

function App() {
  return (
    <ThemeProvider theme={theme.default}>
      <ContextProvider>
        <Router history={history}>
          <GloblaStyle />
          <Routes />
        </Router>
      </ContextProvider>
    </ThemeProvider>
  );
}

export default App;
