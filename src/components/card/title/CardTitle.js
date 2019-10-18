import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { updateCard } from '../../../actions/cards';

const CardTitle = ({ title, id }) => {
  const dispatch = useDispatch();
  const [editable, setEditable] = useState(false);
  const [value, setValue] = useState(title);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleToggleClick(e) {
    e.preventDefault();
    setEditable(!editable);
    setValue(title);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      title: value,
      id,
    };

    dispatch(updateCard(
      id,
      data,
    ));

    setEditable(!editable);
  }

  function handleTitleClick(e) {
    e.stopPropagation();
  }

  function renderEditor() {
    return (
      <div role="presentation" className="mb-4" onClick={handleTitleClick}>
        {editable ? (
          <Card>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Control type="text" value={value} onChange={handleChange} className="mb-2" />
                <Button type="submit" className="mr-2">Save</Button>
                <Button type="button" variant="light" onClick={handleToggleClick}>Close</Button>
              </Form>
            </Card.Body>
          </Card>
        ) : (
          <Card onClick={handleToggleClick}>
            <Card.Body>
              {title || 'Title is empty'}
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

CardTitle.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default CardTitle;
