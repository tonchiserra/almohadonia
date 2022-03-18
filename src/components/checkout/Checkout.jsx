import styled from "styled-components";
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import { commerce } from '../../lib/commerce';

import Stepper from './Stepper';
import PaymentForm from './PaymentForm';
import AdressForm from './AdressForm';

const CheckoutContainer = styled.div`
  max-width: 900px;
  margin: auto;
`;

const steps = ['Dirección de envío', 'Detalles de pago'];

const Checkout = ({ cart }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  
  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });

        setCheckoutToken(token)
      } catch (error) {
        
      }
    }

    generateToken();
  }, [cart]);

  if(!cart.line_items) return <Navigate to="/" />
  if(cart.total_items <= 0) return <Navigate to="/" />

  const Confirmation = () => (
    <div>
      Confirmation
    </div>
  );

  const Form = () => activeStep === 0
    ? <AdressForm checkoutToken={checkoutToken} />
    : <PaymentForm />

  return(
    <CheckoutContainer>

      <Stepper activeStep={activeStep} steps={steps} />

      { activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form /> }
    </CheckoutContainer>
  );
}

export default Checkout;