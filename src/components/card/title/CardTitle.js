import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { updateCard } from '../../../actions/cards';
import { useStateValue } from '../../../state';
import styles from './title.module.css';

const CardTitle = ({ title, id }) => {
  const [editor, setEditor] = useState(false);
  const dispatch = useStateValue()[1];

  function handleChange(e) {
    dispatch(updateCard(id, {
      title: e.target.value,
      id,
    }));
  }

  function handleTitleClick(e) {
    e.stopPropagation();
    setEditor(true);
  }

  return (
    <div className={styles.title}>
      {
        !editor
          ? <Card className={styles.text} onClick={handleTitleClick}>{title}</Card>
          : <Form.Control value={title} onClick={handleTitleClick} onChange={handleChange} className={styles.input} />
      }
    </div>
  );
};

CardTitle.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default CardTitle;
