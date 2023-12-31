import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleAddContact = formData => {
    const hasDuplicates = this.state.contacts.some(
      contact => contact.name === formData.name
    );
    if (hasDuplicates) {
      alert(`${formData.name} is already in contact.`);
      return;
    }

    const finalContact = { id: nanoid(), ...formData };
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, finalContact] };
    });
  };

  handleDeleteContact = contactId => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== contactId),
    });
  };

  handleChangeFilter = e => {
    const value = e.target.value;
    this.setState({ filter: value });
  };

  filteredContacts = () =>
    this.state.contacts.filter(contact =>
      contact.name
        .toLowerCase()
        .includes(this.state.filter.trim().toLowerCase())
    );

  render() {
    const filteredContacts = this.filteredContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm handleAddContact={this.handleAddContact} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.handleChangeFilter} />
        <ContactList
          contacts={filteredContacts}
          handleDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}
