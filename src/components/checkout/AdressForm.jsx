import { useState, useEffect } from 'react';
import styled from "styled-components";
import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';

import TextInput from '../ui/TextInput';
import Button from '../ui/Button';
import SelectInput from '../ui/SelectInput';

import { commerce } from '../../lib/commerce';

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
    margin-bottom: 1rem;
  }

  .buttons-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 1rem;
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

const AdressForm = ({ checkoutToken, setActiveStep }) => {
  const [shippingCountries, setShippingContruies] = useState([]);
  const [shippingCountry, setShippingContry] = useState('');
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState('');
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState('');

  const navigate = useNavigate();

  const countries = Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name }));
  const subdivisions = Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name }));
  const options = shippingOptions.map((so) => ({ id: so.id, label: `${so.description} - (${so.price.formatted_with_symbol})` }));

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId); 
    setShippingContruies(countries);
  }

  const fetchSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);
    setShippingSubdivisions(subdivisions);
  }

  const fetchShippingOptions = async (checkoutTokenId, country, region = null) => {
    const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region });
    setShippingOptions(options);
  }

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, []);

  useEffect(() => {
    if(shippingCountry) fetchSubdivisions(shippingCountry); 
  }, [shippingCountry]);

  useEffect(() => {
    if(shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);
  }, [shippingSubdivision]);

  const validateAdressForm = (values) => {
    const errors = {}

    if(!values.firstname){
      errors.firstname = 'Campo vac??o. Ingrese nombre';
    }

    if(!values.lastname){
      errors.lastname = 'Campo vac??o. Ingrese apellido';
    }

    if(!values.adress){
      errors.adress = 'Campo vac??o. Ingrese direcci??n';
    }

    if(!values.email){
      errors.email = 'Campo vac??o. Ingrese email';
    }else if(!values.email.includes("@")){
      errors.email = 'Email no v??lido. example@example.com'
    }

    if(!values.city){
      errors.city = 'Campo vac??o. Ingrese ciudad';
    }

    if(!values.postalcode){
      errors.postalcode = 'Campo vac??o. Ingrese c??digo postal';
    }

    if(!values.shippingcountry){
      errors.shippingcountry = 'Campo vac??o. Seleccione pa??s de env??o';
    }

    if(!values.shippingsubdivision){
      errors.shippingsubdivision = 'Campo vac??o. Seleccione subdivisi??n';
    }

    if(!values.shippingoption){
      errors.shippingoption = 'Campo vac??o. Seleccione opci??n de env??o';
    }

    return errors;
  }

  const nextStep = (values) => {
    setActiveStep(1);
    //console.log(values);
  }

  return(
    <Formik
      initialValues={{ firstname: '', lastname: '', adress: '', email: '', city: '', postalcode: '', shippingcountry: '', shippingsubdivision: '', shippingoption: '', }}
      validate={validateAdressForm}
      onSubmit={values => nextStep(values)}
    >
      <StyledForm>
        <div className="input-container">
          <TextInput name='firstname' label='Nombre' />
          <TextInput name='lastname' label='Apellido' />
          <TextInput name='adress' label='Direcci??n' />
          <TextInput name='email' label='Email' />
          <TextInput name='city' label='Ciudad' />
          <TextInput name='postalcode' label='C??digo postal' />
        </div>

        <div className="select-container">
          <SelectInput
            label='Pa??s de env??o'
            name='shippingcountry'
            typeOptions={countries}
            handleChange={setShippingContry}
          />

          <SelectInput
            label='Subdivisi??n de env??o'
            name='shippingsubdivision'
            typeOptions={subdivisions}
            handleChange={setShippingSubdivision}
          />

          <SelectInput
            label='Opci??n de env??o'
            name='shippingoption'
            typeOptions={options}
            handleChange={setShippingOption}
          />
        </div>

        <div className="buttons-container">
          <Button type='submit' >Aceptar</Button>
          <Button type='button' secondary onClick={() => navigate(-1)} >Cancelar</Button>
        </div>
      </StyledForm>
    </Formik>
  );
}

export default AdressForm;