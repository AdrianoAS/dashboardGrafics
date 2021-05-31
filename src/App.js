import { Container } from "@material-ui/core";
import Dashboard from "./components/Dashboard";
import { GlobaloStyle } from "./globalStyle/GlobalStyle";

function App() {
  return (
    <Container maxWidth="xl">
      <GlobaloStyle />
      <Dashboard />
    </Container>
  );
}

export default App;
