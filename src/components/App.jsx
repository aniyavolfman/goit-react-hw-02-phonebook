import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container } from './Container/Container';
import { Form } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = contact => {
    const finalContact = {
      id: nanoid(),
      ...contact,
    };

    this.setState({
      contacts: [...this.state.contacts, finalContact],
    });
  };

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <ContactsList contacts={this.state.contacts} />
      </Container>
    );
  }
}
