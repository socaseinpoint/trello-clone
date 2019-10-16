import React from 'react';
import PropTypes from 'prop-types';
import CardModalBody from './body';
import CommentList from '../comment-list';
import AddComment from '../add-comment';

const CardModal = ({
  title,
  body,
  id,
  comments,
}) => (
  <div>
    <div className="mb-4">{title}</div>
    <CardModalBody body={body} id={id} />
    <CommentList comments={comments} />
    <AddComment id={id} />
  </div>
);


CardModal.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  comments: PropTypes
    .arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        author: PropTypes.number.isRequired,
        card: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
      }),
    )
    .isRequired,
};

export default CardModal;
