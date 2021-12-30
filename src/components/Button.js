import styled from "styled-components";

const Button = styled.button`
  background-color: ${props => props.secondary ? '#FFFFFF' : '#408499'};
  color: ${props => props.secondary ? '#408499' : '#FFFFFF'};
  font-size: 1rem;
  font-weight: bold;
  border: 2px solid #408499;
  border-radius: 10px;
  height: 3rem;
  width: 250px;
  cursor: pointer;
  transition: all 300ms ease-in-out;

  &:hover {
    opacity: .75;
  }
`;

export default Button;