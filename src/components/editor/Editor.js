import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Editor = ({ value, onSave }) => {
  const [editorValue, setEditorValue] = useState(value);
  const [editable, setEditable] = useState(false);

  function handleToggleEditableClick() {
    setEditorValue(value);
    setEditable(!editable);
  }

  function handleChange(e) {
    setEditorValue(e.target.value);
  }

  function handleSaveClick() {
    onSave(editorValue);
    setEditable(!editable);
  }

  function renderInput() {
    return (
      <Card>
        <Card.Body>
          <Form.Control value={editorValue} onChange={handleChange} className="mb-2" />
          <Button onClick={handleSaveClick} className="mr-2">Save</Button>
          <Button onClick={handleToggleEditableClick} variant="light">Close</Button>
        </Card.Body>
      </Card>
    );
  }

  function renderPreview() {
    return (
      <Card onClick={handleToggleEditableClick} className="p-4">
        {value}
      </Card>
    );
  }

  return (
    <div>
      {
        editable ? (
          renderInput()
        ) : (
          renderPreview()
        )
      }
    </div>
  );
};

Editor.propTypes = {
  value: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default Editor;
