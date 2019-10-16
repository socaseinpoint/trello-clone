import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useStateValue } from '../../state';
import { addComment } from '../../actions/comments';

const AddComment = ({ body, id }) => {
  const dispatch = useStateValue()[1];
  const [editable, setEditable] = useState(false);
  const [value, setValue] = useState(body);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleToggleClick(e) {
    e.preventDefault();
    setEditable(!editable);
    setValue(body);
  }

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(addComment(
      value,
      id,
    ));

    setEditable(!editable);
  }

  function renderEditor() {
    return (
      <div>
        {editable ? (
          <Form onSubmit={handleSubmit}>
            <Form.Control type="text" value={value} onChange={handleChange} />
            <Button type="submit">Save</Button>
            <Button type="button" variant="light" onClick={handleToggleClick}>x</Button>
          </Form>
        ) : (
          <div role="presentation" onClick={handleToggleClick}>
            {body ? ({ body }) : <Card>Add Comment</Card>}
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      <div>
        {renderEditor()}
      </div>
    </div>
  );
};

AddComment.propTypes = {
  body: PropTypes.string,
  id: PropTypes.number.isRequired,
};

AddComment.defaultProps = {
  body: '',
};

export default AddComment;
