import { Formik, Form } from 'formik';
import TextInput from './ui/TextInput';
import Button from './ui/Button';

const AdressForm = () => {
  return(
    <Formik
      initialValues={{ firstname: '', lastname: '', address: '', email: '', city: '', postalcode: '', }}
      //validate={}  crear funcion validate
      onSubmit={values => console.log(values)}  //cambiar console.log por la logica correspondiente
    >
      <Form>
        <TextInput name='firstname' label='Nombre' />
        <TextInput name='lastname' label='Apellido' />
        <TextInput name='address' label='Dirección' />
        <TextInput name='email' label='Email' />
        <TextInput name='city' label='Ciudad' />
        <TextInput name='postalcode' label='Código postal' />

        <Button type='submit'>Aceptar</Button>
      </Form>
    </Formik>
  );
}

export default AdressForm;