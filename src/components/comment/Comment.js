import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

const Comment = ({
  id,
  title,
  author,
}) => (
  <Card className="mb-2">
    <Card.Body>
      <Card.Title>
        {author}
      </Card.Title>
      <Card.Text>
        {title}
      </Card.Text>
    </Card.Body>
  </Card>
);

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.number.isRequired,
};

export default Comment;
