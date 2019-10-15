import React, { useState } from 'react';
import { updateCard } from '../../../actions/cards';
import { useStateValue } from '../../../state';
import styles from './title.module.css';

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
        !editor ? <div>{title}</div> : <div><input value={title} onChange={handleChange} /></div>
      }
      <div onClick={handleToggleClick} >Toggle</div>
    </div>
  );
};

CardTitle.defaultProps = {
  title: '',
};

export default CardTitle;
