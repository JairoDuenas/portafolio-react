import styled from "styled-components";
import { MyRoutes } from "./routers/routes";

function App() {
  return (
    <>
      <Container>
        <section>
          <MyRoutes />
        </section>
      </Container>
    </>
  );
}
const Container = styled.div``;

export default App;
