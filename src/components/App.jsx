import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import css from './App.module.css';
import { ContactForm } from './contactForm/contactForm';
import { Filter } from './filterContactList/filterContactList';
import { ContactList } from './contactList/contactList';

const contactsKey = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contactParse = JSON.parse(localStorage.getItem(contactsKey)) || [];
    setContacts(contactParse);
  }, []);

  const addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(prevContacts => [contact, ...prevContacts]);
  };

  const changeFilter = value => {
    setFilter(value);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <div className={css.Wrapper}>
      <h1 className={css.Header}>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      {contacts.length > 0 ? (
        <ContactList
          filteredContacts={filteredContacts}
          onDeleteContact={deleteContact}
          filtredContacts={filteredContacts}
        />
      ) : (
        <p>No contacts found.</p>
      )}
    </div>
  );
};
