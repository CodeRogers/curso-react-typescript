import logo from "../../assets/logo.png"
import { Button, Container, Input, Logo } from './styles';
import { useAuth } from "../../contexts/auth";

function SignIn() {
  const { loading, signIn } = useAuth();
  function handleSignIn() {
    signIn();
  }
  
  return (
    <Container>
      <Logo src={logo} alt="CL Logo"/>
      <Input type="text" placeholder="email"/>
      <Input type="password" placeholder="senha"/>
      <Button onClick={handleSignIn}>
        {loading ? 'Carregando' : 'Entrar'}
      </Button>
    </Container>
  );
}

export default SignIn;