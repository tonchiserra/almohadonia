import { useField } from 'formik';
import styled from 'styled-components';

const StyledTextInput = styled.div`
  & {

  }

  label {

  }

  input {

  }

  .error {
    
  }
`;

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return(
    <StyledTextInput>
      <label>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
    </StyledTextInput>
  );
}

export default TextInput;