import React, { useCallback } from 'react';
import css from './contactListItem.module.css';
import PropTypes from 'prop-types';

export const ContactListItem = ({ name, number, onDeleteContact, id }) => {
  const handleDeleteClick = useCallback(() => {
    onDeleteContact(id);
  }, [onDeleteContact, id]);

  return (
    <div className={css.ListItem}>
      {name} : {number}
      <button className={css.DeleteButton} onClick={handleDeleteClick}>
        Delete
      </button>
    </div>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
