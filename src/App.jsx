import styled from "styled-components";
import { MyRoutes } from "./routers/routes";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <Container>
        <GlobalStyles />
        <section>
          <MyRoutes />
        </section>
      </Container>
    </>
  );
}
const Container = styled.div``;

export default App;
