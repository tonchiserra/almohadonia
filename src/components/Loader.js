import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  border: 8px solid rgba(0,0,0,0.1);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border-left-color: #408499;
  animation: ${spin} 1s ease infinite;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: none;
`;

export default Loader;