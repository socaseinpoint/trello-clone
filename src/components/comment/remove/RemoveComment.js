import React from 'react';
import PropTypes from 'prop-types';
import Badge from 'react-bootstrap/Badge';
import { useStateValue } from '../../../state';
import { removeComment } from '../../../actions/comments';

const RemoveComment = ({ id }) => {
  const dispatch = useStateValue()[1];

  function handleClick() {
    dispatch(removeComment(id));
  }

  return (
    <Badge onClick={handleClick} variant="danger">Remove</Badge>
  );
};

RemoveComment.propTypes = {
  id: PropTypes.string.isRequired,
};

export default RemoveComment;
