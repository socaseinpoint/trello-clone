import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { removeComment } from '../../../actions/comments';

const RemoveComment = ({ id }) => {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(removeComment(id));
  }

  return (
    <Button onClick={handleClick} variant="danger">Remove</Button>
  );
};

RemoveComment.propTypes = {
  id: PropTypes.string.isRequired,
};

export default RemoveComment;
