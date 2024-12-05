import React from 'react';
import styled, { keyframes } from 'styled-components';

const Spinner = () => {
  return (
    <LoaderContainer>
      <Loader />
      <LoadingText>Loading...</LoadingText>
    </LoaderContainer>
  );
};

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Loader = styled.div`
  border: 8px solid #f3f3f3; /* Light gray */
  border-top: 8px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 1s linear infinite;
`;

const LoadingText = styled.p`
  margin-top: 20px;
  font-size: 1.2rem;
  font-weight: 500;
  color: #3498db;
`;

export default Spinner;
