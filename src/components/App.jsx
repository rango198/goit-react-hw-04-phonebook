import { Component } from 'react';
import initialContacts from './contacts.json';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './filter/filter';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { ContactsForm } from './Form/ContactsForm';
import { ContactsWrap, Container, PhoneWrap } from './App.styled';

export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  addContacts = newContact => {
    this.state.contacts.filter(
      contact =>
        contact.name.toLowerCase().trim() ===
          newContact.name.toLowerCase().trim() ||
        contact.number.trim() === newContact.number.trim()
    ).length
      ? Notify.warning(`${newContact.name}: is already in contacts`, {
          width: '400px',
          position: 'center-center',
          timeout: 3000,
          fontSize: '20px',
        })
      : this.setState(prevState => {
          return {
            contacts: [newContact, ...prevState.contacts],
          };
        });
  };

  onChangeFilter = event => {
    const { value } = event.currentTarget;
    this.setState({ filter: value });
  };

  filterByName = () => {
    const { contacts, filter } = this.state;
    const lowerFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(lowerFilter)
    );
  };

  onDeleteContacts = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const visibleContacts = this.filterByName();
    const { filter } = this.state;

    return (
      <Container>
        <PhoneWrap>
          <h1>Phonebook</h1>
          <ContactsForm addContacts={this.addContacts} />
        </PhoneWrap>
        <ContactsWrap>
          <h2>Contacts</h2>
          <Filter onChangeFilter={this.onChangeFilter} filter={filter} />
          <ContactsList
            contacts={visibleContacts}
            onDelete={this.onDeleteContacts}
          />
        </ContactsWrap>
      </Container>
    );
  }
}
