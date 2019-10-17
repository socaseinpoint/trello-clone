import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useStateValue } from '../../../state';
import { updateComment } from '../../../actions/comments';

const CommentBody = ({ body, id }) => {
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

    const data = {
      body: value,
      id,
    };

    dispatch(updateComment(
      id,
      data,
    ));

    setEditable(!editable);
  }

  function renderEditor() {
    return (
      <div className="mb-4">
        {editable ? (
          <Card>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Control type="text" value={value} onChange={handleChange} className="mb-2" />
                <Button type="submit" className="mr-2">Save</Button>
                <Button type="button" variant="light" onClick={handleToggleClick}>x</Button>
              </Form>
            </Card.Body>
          </Card>
        ) : (
          <Card onClick={handleToggleClick}>
            <Card.Body>
              {body || 'Comment is empty'}
            </Card.Body>
          </Card>
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

CommentBody.propTypes = {
  body: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default CommentBody;
