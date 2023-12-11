import { Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { updateContact } from 'components/redux/contactsSlice';

import {
  StyledForm,
  StyledField,
  StyledError,
  AddButton,
  Label,
} from './ContactForm.styled';

const validSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Дуже коротке!')
    .max(50, 'Надто довге!')
    .required('Заповни поле'),
  number: Yup.string()
    .min(5, 'Дуже короткий!')
    .max(12, 'Надто довгий!')
    .required('Заповни поле'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const updateContacts = values => {
    if (
      contacts.some(
        value =>
          value.name.toLocaleLowerCase() === values.name.toLocaleLowerCase()
      )
    ) {
      alert(`${values.name} is already in contacts`);
    } else {
      const list = { id: nanoid(), ...values };
      console.log(list);
      dispatch(updateContact(list));
    }
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={validSchema}
        onSubmit={(values, actions) => {
          console.log(values, actions);
          updateContacts(values);
          actions.resetForm();
        }}
      >
        <StyledForm>
          <Label htmlFor="name">Name</Label>
          <StyledField
            id="firstName"
            name="name"
            placeholder="Oleh Kovalenko "
          />
          <StyledError name="name" component="span" />
          <Label htmlFor="number">Number</Label>
          <StyledField
            type="tel"
            id="lastName"
            name="number"
            placeholder="235-34-56"
          />
          <StyledError name="number" component="span" />
          <AddButton type="submit">Add contact</AddButton>
        </StyledForm>
      </Formik>
    </div>
  );
};
