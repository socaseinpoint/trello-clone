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
          <div role="presentation" onClick={handleToggleClick}>
            {body ? ({ body }) : <Card><Card.Body>Add Comment</Card.Body></Card>}
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
  id: PropTypes.string.isRequired,
};

AddComment.defaultProps = {
  body: '',
};

export default AddComment;
