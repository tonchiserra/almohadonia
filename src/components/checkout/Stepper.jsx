import styled from "styled-components";

const StepperContainer = styled.div`

  ul {
    display: flex;
    justify-content: space-between;
    padding: 0;
  }
`;

const Step = styled.li`
  & {
    position: relative;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
  }

  &::before {
    content: '';
    position: absolute;
    background: #e6e6e6;
    width: 100%;
    height: 6px;
    top: calc(1rem - 3px); //1rem es la mitad de la altura del spam y 3px es la mitad de su altura
    left: 50%;
    z-index: 1;
  }

  &:last-child::before {
    content: none;
  }

  &::after {
    content: '';
    position: absolute;
    background: var(--first-color);
    width: ${props => props.isCompleted ? '100%' : '0px'};
    height: 6px;
    top: calc(1rem - 3px); //1rem es la mitad de la altura del spam y 3px es la mitad de su altura
    left: 50%;
    z-index: 1;
    transition: all 300ms ease-in-out;
  }

  &:last-child::after {
    content: none;
  }

  span {
    position: relative;
    width: 2rem;
    height: 2rem;
    background-color: ${props => props.isCompleted ? 'var(--first-color)' : 'var(--gray-color)'};
    border: 2px solid ${props => props.isActive ? 'var(--first-color)' : '#e6e6e6'};
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: ${props => props.isCompleted ? '#fff' : props.isActive ? 'var(--first-color)' : '#e6e6e6'};
    z-index: 3;
  }

  p {
    
  }
`;

const Stepper = ({ activeStep, steps}) => {
  return(
    <StepperContainer>
        <ul>
          {steps.map((step) => (
            <Step 
              key={step} 
              isActive={activeStep >= steps.indexOf(step) ? true : false} 
              isCompleted={activeStep > steps.indexOf(step) ? true : false}
            >
              <span>
                {activeStep > steps.indexOf(step) ? '✔' : steps.indexOf(step) + 1 }
              </span>
              <p>{step}</p>
            </Step>
          ))}
        </ul>
    </StepperContainer>
  );
}

export default Stepper;