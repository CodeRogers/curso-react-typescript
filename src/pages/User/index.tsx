import logo from "../../assets/logo.png";
import logout from "../../contexts/logout";
import * as Style from "./styles";

function User() {
  return (
    <Style.Container>
      <Style.ButtonContainer>
        <Style.Logout onClick={logout}>Logout</Style.Logout>
      </Style.ButtonContainer>
      <Style.CardContainer>
        <Style.Card>
          <Style.ContainerData>
            <div>Nome: Rogério Venâncio</div>
            <div>Empresa: Loading Jr</div>
          </Style.ContainerData>
          <Style.ContainerLogo>
            <Style.Logo src={logo} alt="CL Logo" />
          </Style.ContainerLogo>
        </Style.Card>
      </Style.CardContainer>
    </Style.Container>
  );
}

export default User;
