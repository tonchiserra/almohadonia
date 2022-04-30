import { useField } from 'formik';
import styled from 'styled-components';

const StyledTextInput = styled.div`
  & {
    display: flex;
    flex-direction: column;
    align-items: left;
    gap: .2rem;
  }

  .label {
    display: flex;
    gap: 1rem;
  }

  label { 
    font-size: 14px;
  }

  input {
    height: 3rem;
    font-size: 1rem;
    padding: 0 .5rem;
    outline: none;
    border-radius: 5px;
    border: 1px solid #f4f4f4;
    background-color: #f4f4f4;
    transition: all 300ms ease-in-out;
  }

  input:hover {
    border: 1px solid #c4c4c4;
  }

  input:focus {
    border: 1px solid #c4c4c4;
  }

  .error {
    font-size: 12px;
    color: red;
  }
`;

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return(
    <StyledTextInput>
      <div className='label'>
        <label>{label}</label>
        {meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
      </div>
      {meta.touched && meta.error 
        ? <input {...field} {...props} style={{ border: '1px solid red' }} />
        : <input placeholder={`Ingresa tu ${label}`} {...field} {...props} />
      }
    </StyledTextInput>
  );
}

export default TextInput;