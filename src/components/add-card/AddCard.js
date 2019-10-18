import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types'
import { addCard } from '../../actions/cards';

const AddCard = ({ target }) => {
  const [value, setValue] = useState('');
  const [editable, setEditable] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (value === '') {
      return false;
    }

    dispatch(addCard(value, target, user.name));

    setValue('');
    return true;
  }

  function handleToggleClick(e) {
    e.preventDefault();
    setEditable(!editable);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      {editable ? (
        <div>
          <Form.Control type="text" value={value} onChange={handleChange} className="mb-2" />
          <Button type="submit" className="mr-2">Add Card</Button>
          <Button type="button" variant="light" onClick={handleToggleClick}>Close</Button>
        </div>
      ) : (
        <Button type="button" onClick={handleToggleClick}>Add Card</Button>
      )}
    </form>
  );
};

AddCard.propTypes = {
  target: PropTypes.string.isRequired,
};

export default AddCard;
