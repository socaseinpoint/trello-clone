import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { updateCard } from '../../../actions/cards';
import { useStateValue } from '../../../state';
import styles from './title.module.css';
import editSvg from './edit.svg';

const CardTitle = ({ title, id }) => {
  const [editor, setEditor] = useState(false);
  const dispatch = useStateValue()[1];

  function handleChange(e) {
    dispatch(updateCard(id, {
      title: e.target.value,
      id,
    }));
  }

  function handleToggleClick(e) {
    e.stopPropagation();
    setEditor(!editor);
  }

  return (
    <div className={styles.title}>
      {
        !editor
          ? <Card className={styles.text}>{title}</Card>
          : <Form.Control value={title} onChange={handleChange} className={styles.input} />
      }
      <Button className={styles.edit} onClick={handleToggleClick}>
        <img src={editSvg} alt="edit" />
      </Button>
    </div>
  );
};

CardTitle.defaultProps = {
  title: '',
};

CardTitle.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number.isRequired,
};

export default CardTitle;
