import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0%, 100% { transform: rotate(0); }
  25% { transform: rotate(90deg); }
  50% { transform: rotate(180deg); }
  75% { transform: rotate(270deg); }
`;

const bounce = keyframes`
  0%, 100%, 20%, 50%, 80% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

export const Loader = () => {
  return (
    <StyledLoader>
      <Circle color="#e50914" />
      <Circle color="#1e90ff" />
      <Circle color="#ff6347" />
      <Circle color="#32cd32" />
      <Circle color="#9400d3" />
      <Circle color="#ff4500" />
    </StyledLoader>
  );
};

const StyledLoader = styled.div`
  position: fixed;
  top: 30%;
  left: 40%;
  display: inline-block;
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${props => props.color};
  border-radius: 50%;
  display: inline-block;
  animation: ${spin} 2.2s cubic-bezier(4.5, 0, 0.5, 1) infinite, ${bounce} 2s ease-in-out infinite;

  &:nth-child(1) {
    animation-delay: -2.45s;
  }

  &:nth-child(2) {
    animation-delay: -2.3s;
  }

  &:nth-child(3) {
    animation-delay: -2.15s;
  }
`;
