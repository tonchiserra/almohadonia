import styled from "styled-components";

const StyledButton = styled.button`
  pointer-events: ${props => props.disabled ? 'none' : 'unset'};  
  background-color: ${props => props.disabled ? '#e6e6e6' : props.secondary ? '#FFFFFF' : '#408499'};
  color: ${props => props.disabled ? '#FFFFFF' : props.secondary ? '#408499' : '#FFFFFF'};
  font-size: 1rem;
  font-weight: bold;
  border: 2px solid ${props => props.disabled ? '#e6e6e6' : '#408499'};
  border-radius: 5px;
  height: 4rem;
  width: 100%;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  overflow: hidden;
  position: relative;

  &:hover {
    color: #fff;
    border: 2px solid #336a7a;
  }

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background: #336a7a;
    position: absolute;
    z-index: 1;
    top: 100%;
    left: 0;
    transition: all 200ms ease-in-out;
  }

  &:hover::after {
    top: 0;
    color: #fff;
  }

  & > span {
    z-index: 2;
    position: relative;
  }
`;

const Button = ({ children, secondary, disabled, ...props }) => {
  return(
    <StyledButton secondary={secondary} disabled={disabled} {...props} >
      <span>{children}</span>
    </StyledButton>
  );
}

export default Button;