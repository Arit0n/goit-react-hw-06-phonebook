import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './Form/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { GlobalStyle } from './GlobalStyle';
import { Box } from './Form/ContactForm.styled';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
    { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
    { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const updateFilter = filterValue => {
    return setFilter(filterValue);
  };

  const updateContacts = values => {
    if (
      contacts.some(
        value =>
          value.name.toLocaleLowerCase() === values.name.toLocaleLowerCase()
      )
    ) {
      alert(`${values.name} is already in contacts`);
    } else {
      const list = { ...values, id: nanoid() };

      setContacts(prevState => {
        return [...prevState, list];
      });
    }
  };

  const deleteContact = id => {
    setContacts(pervState => {
      return pervState.filter(contact => contact.id !== id);
    });
  };

  const visibleNames = contacts.filter(item => {
    const hasNames = item.name.toLowerCase().includes(filter.toLowerCase());

    return hasNames;
  });

  useEffect(() => {
    const localContact = localStorage.getItem('contact');
    const parseContact = JSON.parse(localContact);

    if (parseContact) {
      setContacts(parseContact);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contact', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Box>
      <h2>Phonebook</h2>
      <ContactForm onAdd={updateContacts} />
      <h2>Contacts</h2>
      <Filter filter={filter} updateFilter={updateFilter} />
      <ContactList onDelete={deleteContact} contacts={visibleNames} />
      <GlobalStyle />
    </Box>
  );
};

//   render() {

// return (
//   <Box>
//     <h2>Phonebook</h2>
//     <ContactForm onAdd={this.updateContacts} />
//     <h2>Contacts</h2>
//     <Filter filter={this.state.filter} updateFilter={this.updateFilter} />
//     <ContactList onDelete={this.deleteContact} contacts={visibleNames} />
//     <GlobalStyle />
//   </Box>
// );
//   }
// }
