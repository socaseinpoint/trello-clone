import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Editor = ({ initialValue, lable, onSave }) => {
  const [value, setValue] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <form onSubmit={onSave}>
      {editable ? (
        <div>
          <Form.Control type="text" value={value} onChange={handleChange} className="mb-2" />
          <Button type="submit" className="mr-2">Add Card</Button>
          <Button type="button" variant="light" onClick={handleToggleClick}>Close</Button>
        </div>
      ) : (
        <Button type="button" onClick={handleToggleClick}>{lable}</Button>
      )}
    </form>
  );
};

Editor.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Editor;
