import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  width: 100%;
`;

export const Logout = styled.button`
  max-width: 30%;
  width: 5rem;
  height: 2.5rem;
  background-color: ${({ theme }) => theme.colors.pink};
  
  border: 0;
  border-radius: 5px;
  
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.pink};
    box-shadow: 0px 0px 0.2rem 0.02rem ${({ theme }) => theme.colors.pink};
  }

  &:active {
    box-shadow: 0 0 0 0;
    transform: scale(0.99)
  }
`;

export const CardContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 1rem;
  
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  width: 20rem;
  height: 10rem;
  max-width: 80%;
  background-color: ${({ theme }) => theme.colors.black};

  box-shadow: 0px 0px 5px 2px ${({ theme }) => theme.colors.pink};
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  border-radius: 8px;
  padding: 20px;
`;

export const ContainerData = styled.div`
  height: 40%;
  
  color: ${({theme}) => theme.colors.white};
  font-weight: bold;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContainerLogo = styled.div`
  height: 100%;
  
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  max-height: 45%;
  width: 30px;
  
  align-items: center;
  justify-content: center;
`;