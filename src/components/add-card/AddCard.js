import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useStateValue } from '../../state';
import { addCard } from '../../actions/cards';

const AddCard = ({ target }) => {
  const [value, setValue] = useState('');
  const [editable, setEditable] = useState(false);
  const dispatch = useStateValue()[1];

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (value === '') {
      return false;
    }

    dispatch(addCard(value, target));

    setValue('');
    return true;
  }

  function handleToggleClick(e) {
    e.preventDefault();
    setEditable(!editable);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      {editable ? (
        <div>
          <Form.Control type="text" value={value} onChange={handleChange} />
          <Button type="submit">Add Card</Button>
          <Button type="button" variant="light" onClick={handleToggleClick}>Close</Button>
        </div>
      ) : (
        <div role="presentation" onClick={handleToggleClick}>Add Card</div>
      )}
    </form>
  );
};

AddCard.propTypes = {
  target: PropTypes.number.isRequired,
};

export default AddCard;
