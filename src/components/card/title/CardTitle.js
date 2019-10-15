import React, { useState } from 'react';
import { updateCard } from '../../../actions/cards';
import { useStateValue } from '../../../state';
import styles from './title.module.css';
import editSvg from './edit.svg'; 

const CardTitle = ({ title, id }) => {
  const [editor, setEditor] = useState(false);
  const [state, dispatch] = useStateValue();

  function handleChange(e) {
    dispatch(updateCard(id, {
      title: e.target.value,
      id,
    }));
  }

  function handleToggleClick() {
    setEditor(!editor);
  }

  return (
    <div className={styles.title}>
      {
        !editor
          ? <div className={styles.text}>{title}</div>
          : <input value={title} onChange={handleChange} className={styles.input} />
      }
      <div className={styles.edit} onClick={handleToggleClick} >
        <img src={editSvg} alt='edit' />
      </div>
    </div>
  );
};

CardTitle.defaultProps = {
  title: '',
};

export default CardTitle;
