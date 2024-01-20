import { useState } from 'react';
import initialContacts from './contacts.json';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './filter/filter';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { ContactsForm } from './Form/ContactsForm';
import { ContactsWrap, Container, PhoneWrap } from './App.styled';
import useLocaStorage from './hooks/useStateLocalStorage';

export const App = () => {
  const [contacts, setContacts] = useLocaStorage('contacts', initialContacts);
  const [filter, setFilter] = useState('');

  const addContacts = newContact => {
    const isContactsExist = contacts.some(
      contact =>
        contact.name.toLowerCase().trim() ===
          newContact.name.toLowerCase().trim() ||
        contact.number.trim() === newContact.number.trim()
    );
    if (isContactsExist) {
      Notify.warning(`${newContact.name}: is already in contacts`, {
        width: '400px',
        position: 'center-center',
        timeout: 3000,
        fontSize: '20px',
      });
    } else {
      setContacts(prevContacts => [newContact, ...prevContacts]);
    }
  };

  const onChangeFilter = event => {
    const { value } = event.currentTarget;
    setFilter(value);
  };

  const filterByName = () => {
    const lowerFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(lowerFilter)
    );
  };

  const onDeleteContacts = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const visibleContacts = filterByName();

  return (
    <Container>
      <PhoneWrap>
        <h1>Phonebook</h1>
        <ContactsForm addContacts={addContacts} />
      </PhoneWrap>
      <ContactsWrap>
        <h2>Contacts</h2>
        <Filter onChangeFilter={onChangeFilter} filter={filter} />
        <ContactsList contacts={visibleContacts} onDelete={onDeleteContacts} />
      </ContactsWrap>
    </Container>
  );
};
