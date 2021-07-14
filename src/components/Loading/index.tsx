import { H1, Container, LoadingCircle } from "./styles";

function Loading() {
  return (
    <Container>
      <H1>Carregando</H1>
      <LoadingCircle />
    </Container>
  );
}

export default Loading;