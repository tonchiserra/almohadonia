import { useField } from 'formik';
import styled from 'styled-components';

const StyledSelectInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    gap: .2rem;
    width: 100%;
    margin-top: 1rem;

  .label {
    display: flex;
    gap: 1rem;
  }

  .error {
    font-size: 12px;
    color: red;
  }

  select {
    height: 3rem;
    font-size: 1rem;
    padding: 0 .5rem;
    outline: none;
    border-radius: 5px;
    border: 1px solid #f4f4f4;
    background-color: #f4f4f4;
    transition: all 300ms ease-in-out;
  }

  select:hover {
    border: 1px solid #c4c4c4;
  }

  select:focus {
    border: 1px solid #c4c4c4;
  }

  @media screen and (min-width: 800px) {
    & {
      grid-template-columns: 1fr 1fr;
    }

    .buttons-container {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

const SelectInput = ({ label, typeOptions, ...props }) => {
  const [field, meta] = useField(props);
  
  return(
    <StyledSelectInput>
      <div className='label'>
        <label>{label}</label>
        {meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
      </div>

      {/* 
        Agregar evento onChange en select asi se cambia el state del valor de ese select y desaparece el error
      */}

      <select {...field} {...props}
        style={ meta.touched && meta.error ? {border: '1px solid red'} : null }
      >
        <option value=''>Seleccionar</option>
        {typeOptions.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label.length > 20
              ? option.label.slice(0, 20) + '...'
              : option.label
            }
          </option>
        ))}
      </select> 
    </StyledSelectInput>
  );
}

export default SelectInput;