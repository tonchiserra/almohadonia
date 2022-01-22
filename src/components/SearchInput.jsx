import styled from 'styled-components';
import { Formik, Form, Field} from 'formik';

import SearchIcon from '../assets/glass.svg';

const StyledForm = styled(Form)`
  height: 2rem;
  width: max-content;
  background-color: var(--gray-color);
  border-radius: 5px;
  padding: 0 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & button {
    background-color: transparent;
    border-radius: 999px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 300ms ease-in-out;
    padding: 0;
    margin: 0;
  }

  & button:hover {
    opacity: .75;
  }

  & button img {
    width: 1.5rem;
    height: 1.5rem;
    margin: 0;
    padding: 0;
  }
`;

const StyledField = styled(Field)`
  width: 100%;
  height: 100%;
  color: #222222;
  background-color: transparent;
  border: none;
  outline: none;
  margin: 0;
  padding: 0 .5rem 0 0;
  font-size: 14px;

  & #search-1 {
    display: none;
  }
`;

const SearchInput = () => {
  return(
    <Formik
      initialValues={{ search: ''}}
      onSubmit={values => console.log(values)} //posteriormente cambiar el console.log por la logica para hacer la busqueda
    >
      <StyledForm>
        <StyledField name='search' type='text' placeholder='Buscar...' />
        <button type='submit'><img src={SearchIcon} alt="Buscar" /></button>
      </StyledForm>
    </Formik>
  );
}

export default SearchInput;