import React, { useState } from 'react';
import css from './filterContactList.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ onChange }) => {
  const [value, setValue] = useState('');

  const handleChange = event => {
    const inputValue = event.currentTarget.value;
    setValue(inputValue);
    onChange(inputValue);
  };

  return (
    <label>
      Find contacts by name
      <input
        className={css.FiterArea}
        type="text"
        value={value}
        onChange={handleChange}
      />
    </label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
