import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { addUser } from '../../actions/user';

const AddUser = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(addUser(value));
  }

  return (
    <Form onSubmit={handleSubmit}>
      <p>
        Enter your name
      </p>
      <Form.Control value={value} onChange={handleChange} className="mb-4" />
      <Button type="submit">Save</Button>
    </Form>
  );
};

export default AddUser;
