import React, { useCallback } from 'react';
import css from './contact.module.css';
import PropTypes from 'prop-types';

import { ContactListItem } from 'components/contactListItem/contactListItem';

export const ContactList = ({ filtredContacts, onDeleteContact }) => {
  const handleDeleteContact = useCallback(
    id => {
      onDeleteContact(id);
    },
    [onDeleteContact]
  );
  console.log('Filtered Contacts:', filtredContacts);
  return (
    <div className={css.List}>
      {filtredContacts.map(contact => (
        <ContactListItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDeleteContact={handleDeleteContact}
        />
      ))}
    </div>
  );
};

ContactList.propTypes = {
  filtredContacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
