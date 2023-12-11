import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
    { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
    { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
    { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
    { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
  ],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    deleteContact(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
    updateContact(state, action) {
      state.items = [...state.items, action.payload];
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { deleteContact, updateContact } = contactsSlice.actions;

// export const contactsReducer = (state = initialValues, action) => {
//   switch (action.type) {
//     case 'contacts/delete': {
//       return state.filter(contact => contact.id !== action.payload);
//     }
//     case 'contacts/update': {
//       console.log(action.payload);
//       return (state = [...state, action.payload]);
//     }
//     default:
//       return state;
//   }
// };

// export const deleteContact = id => {
//   return { type: 'contacts/delete', payload: id };
// };

// export const updateContact = value => {
//   return { type: 'contacts/update', payload: value };
// };
