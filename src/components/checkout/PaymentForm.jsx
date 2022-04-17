import { Formik, Form } from 'formik';
import styled from 'styled-components';

import TextInput from '../ui/TextInput';
import Button from '../ui/Button';
import SelectInput from '../ui/SelectInput';

const StyledForm = styled(Form)`
  & {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    margin: 0 1rem;
    padding: 1rem;
  }

  .select-container,
  .input-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    width: 100%;
  }

  .buttons-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 2rem;
    width: 100%;
  }

  @media screen and (min-width: 800px) {
    .select-container,
    .input-container {
      grid-template-columns: 1fr 1fr;
    }

    .buttons-container {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

const PaymentForm = ({ setActiveStep }) => {

  const backToAdressForm = () => {
    setActiveStep(0);
  }
  
  return(
    <Formik
      initialValues={{}}
      //validate={}
      onSubmit={values => console.log(values)}
    >
      <StyledForm>
        <div className="input-container">
          <TextInput name='firstname' label='Nombre' />
        </div>

        <div className="select-container">
        
        </div>

        <div className="buttons-container">
          <Button type='submit' >Aceptar</Button>
          <Button type='button' secondary onClick={backToAdressForm} >Cancelar</Button>
        </div>
      </StyledForm>
    </Formik>
  );
}

export default PaymentForm;