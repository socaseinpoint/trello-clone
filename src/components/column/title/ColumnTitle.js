import React from 'react';
import PropTypes from 'prop-types';
import Editor from '../../editor';
import { updateColumn } from '../../../actions/columns';
import { useStateValue } from '../../../state';

const ColumnTitle = ({ title, id }) => {
  const dispatch = useStateValue()[1];

  function onSave(value) {
    dispatch(updateColumn(id, {
      title: value,
      id,
    }));
  }

  return (
    <Editor value={title} onSave={onSave} />
  );
};

ColumnTitle.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ColumnTitle;
