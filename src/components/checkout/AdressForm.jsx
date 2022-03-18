import { useState, useEffect } from 'react';
import styled from "styled-components";
import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';

import TextInput from '../ui/TextInput';
import Button from '../ui/Button';

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
    .input-container {
      grid-template-columns: 1fr 1fr;
    }

    .buttons-container {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

const AdressForm = ({ checkoutToken }) => {
  const [shippingCountries, setShippingContruies] = useState([]);
  const [shippingCountry, setShippingContry] = useState('');
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState('');
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState('');

  const navigate = useNavigate();

  const countries = Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name}));

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId); 
  
    setShippingContruies(countries);
  }

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id) 
  }, []);

  return(
    <Formik
      initialValues={{ firstname: '', lastname: '', address: '', email: '', city: '', postalcode: '', shippingcountry: '', }}
      //validate={}  crear funcion validate
      onSubmit={values => alert("Aún estamos bajo desarrollo. Gracias.")}  //cambiar alert por la logica correspondiente
    >
      <StyledForm>
        <div className="input-container">
          <TextInput name='firstname' label='Nombre' />
          <TextInput name='lastname' label='Apellido' />
          <TextInput name='address' label='Dirección' />
          <TextInput name='email' label='Email' />
          <TextInput name='city' label='Ciudad' />
          <TextInput name='postalcode' label='Código postal' />
        </div>

        <div className="select-container">
          <label>País de envío</label>
          <select value={shippingCountry} name='shippingcountry' onChange={(e) => setShippingContry(e.target.value)}>
            <option value="">Seleccionar</option>
            
            {countries.map((country) => (
              <option key={country.id} value={country.id}>
                {country.label}
              </option> //NO FUNCIONA, RESOLVER
            ))}
            
          </select> 
        </div>

        {/*
          <div className="select-container">
            <label>Subdivisión de envío</label>
            <select onChange={handleChange}>
              <option value=''>Seleccionar</option>
            </select> 
          </div>

          <div className="select-container">
            <label>Opción de envío</label>
            <select onChange={handleChange}>
              <option value=''>Seleccionar</option>
            </select> 
          </div>
        */}

        <div className="buttons-container">
          <Button type='submit' >Aceptar</Button>
          <Button type='button' secondary onClick={() => navigate(-1)} >Cancelar</Button>
        </div>
      </StyledForm>
    </Formik>
  );
}

export default AdressForm;