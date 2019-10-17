import React from 'react';
import PropTypes from 'prop-types';
import Badge from 'react-bootstrap/Badge';
import CardModalBody from './body';
import CommentList from '../comment-list';
import AddComment from '../add-comment';
import CardTitle from '../card/title';
import { useStateValue } from '../../state';

function getColumnNameById(columns, id) {
  return columns.find((item) => item.id === id);
}

const CardModal = ({
  title,
  body,
  id,
  comments,
  column,
  author,
}) => {
  const [{ columns }] = useStateValue();

  return (
    <div>
      <Badge variant="primary" className="mb-4 mr-2">
        {getColumnNameById(columns, column).title}
        {' '}
        Column
      </Badge>
      <Badge variant="secondary" className="mb-4">
        Posted by
        {' '}
        {author}
      </Badge>
      <h6>Title:</h6>
      <CardTitle id={id} title={title} />
      <h6>Body:</h6>
      <CardModalBody body={body} id={id} />
      <h6>Comments:</h6>
      <CommentList comments={comments} />
      <AddComment id={id} />
    </div>
  );
};


CardModal.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  column: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  comments: PropTypes
    .arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        card: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
      }),
    )
    .isRequired,
};

export default CardModal;
