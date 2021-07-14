import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.black};

  display: flex;
  justify-content: center;
  align-items: center;
  
  position: relative;
`;

export const H1 = styled.h1`
  color: #fff;
  z-index: 5;
  justify-self: center;
`;

export const LoadingCircle = styled.div`
  position: absolute;

  width: 230px;
  height: 230px;
  
  justify-self: center;

  border: 5px solid ${({ theme }) => theme.colors.pink};
  border-radius: 50%;
  border-top: 5px solid ${({ theme }) => theme.colors.black};
  
  animation: spin 1.5s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
