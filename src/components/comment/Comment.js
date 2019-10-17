import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import RemoveComment from './remove';
import CommentBody from './body';

const Comment = ({
  id,
  body,
  author,
}) => (
  <Card className="mb-2">
    <Card.Body>
      <Card.Title>
        {author}
      </Card.Title>
      <CommentBody id={id} body={body} />
      <RemoveComment id={id} />
    </Card.Body>
  </Card>
);

Comment.propTypes = {
  id: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Comment;
