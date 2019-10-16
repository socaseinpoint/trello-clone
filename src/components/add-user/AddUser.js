import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useStateValue } from '../../state';
import { addUser } from '../../actions/user';

const AddUser = () => {
  const [value, setValue] = useState('');
  const dispatch = useStateValue()[1];

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addUser(value));
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Control value={value} onChange={handleChange} />
      <Button type="submit">Save</Button>
    </Form>
  );
};

export default AddUser;
