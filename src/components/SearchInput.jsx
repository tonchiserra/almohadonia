import styled from 'styled-components';
import { Formik, Form, Field} from 'formik';

import SearchIcon from '../assets/glass.svg';

const StyledForm = styled(Form)`
  width: 100%;
  background-color: transparent;
  border-radius: 15px;
  padding: 0;
  position: relative;

  & button {
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    width: 2rem;
    padding: .25;
    margin: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    right: .5rem;
    margin: auto;
    border-radius: 999px;
    transition: all 300ms ease-in-out;
    line-height:0;
  }

  & button:hover {
    background-color: #e6e6e6;
  }

  & button img {
    margin: 0;
    padding: 0;
  }

  @media screen and (min-width: 800px){
    & {
      width: 50%;
    }
  }
`;

const StyledField = styled(Field)`
  width: 100%;
  height: 3rem;
  color: #222222;
  background-color: #f4f4f4;
  border: none;
  border-radius: 5px;
  outline: none;
  margin: 0;
  padding: 0 3rem 0 .5rem;
  font-size: 14px;
  border: 1px solid #f4f4f4;
  transition: all 300ms ease-in-out;

  &:hover {
    border: 1px solid #c4c4c4;
  }

  &:focus {
    border: 1px solid #c4c4c4;
  }
`;

const SearchInput = () => {

  const handleSearch = (values) => {
    let message = `No pudimos encontrar nada sobre "${values.search}" porque esta feature todavía no está implementada. \n\nPerdon :(`;
    alert(message);
  }

  return(
    <Formik
      initialValues={{ search: ''}}
      onSubmit={values => handleSearch(values)}
    >
      <StyledForm>
        <StyledField name='search' type='text' placeholder='Buscar...' />
        <button type='submit'><img src={SearchIcon} alt="Buscar" /></button>
      </StyledForm>
    </Formik>
  );
}

export default SearchInput;