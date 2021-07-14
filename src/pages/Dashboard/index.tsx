import logo from "../../assets/logo.png"
import { useAuth } from "../../contexts/auth";
import history from "../../services/history";
import { Button, Container, Logo } from './styles';

function Dashboard() {
  const { loading } = useAuth();
  function handleRedirect(){
    history.push("/user");
  }
  
  return (
    <Container>
      <Logo src={logo} alt="CL Logo"/>
      <Button onClick={handleRedirect}>
        {loading ? 'Carregando' : 'User'}
      </Button>
    </Container>
  );
}

export default Dashboard;