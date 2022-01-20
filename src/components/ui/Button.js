import styled from "styled-components";

const Button = styled.button`
  background-color: ${props => props.secondary ? '#FFFFFF' : '#408499'};
  color: ${props => props.secondary ? '#408499' : '#FFFFFF'};
  font-size: 1rem;
  font-weight: bold;
  border: 2px solid #408499;
  border-radius: 5px;
  height: 3rem;
  width: 250px;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  overflow: hidden;
  position: relative;

  &::after {
    content: "";
    width: 1px;
    height: 1px;
    background: none;
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    transition: all 300ms ease-in-out;
    border-radius: 100px;
    transform-origin: center;
  }

  &:hover {
    background: #244d5a;
    color: #FFF;
  }

  &:hover::after {
    transform: scale(400);
	  background: #2b5c6b;
  }

  & > span {
    z-index: 2;
    position: relative;
  }
`;

export default Button;