import styled from "styled-components";
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

import Stepper from './Stepper';
import PaymentForm from './PaymentForm';
import AdressForm from './AdressForm';

const CheckoutContainer = styled.div`
  max-width: 600px;
  margin: auto;
`;

const steps = ['Dirección de envío', 'Detalles de pago'];

const Checkout = ({ cart }) => {
  const [activeStep, setActiveStep] = useState(0);

  if(!cart.line_items) return <Navigate to="/" />
  if(cart.total_items <= 0) return <Navigate to="/" />

  const Confirmation = () => (
    <div>
      Confirmation
    </div>
  );

  const Form = () => activeStep === 0
    ? <AdressForm />
    : <PaymentForm />

  return(
    <CheckoutContainer>

      <Stepper activeStep={activeStep} steps={steps} />

      { activeStep === steps.length ? <Confirmation /> : <Form /> }
    </CheckoutContainer>
  );
}

export default Checkout;