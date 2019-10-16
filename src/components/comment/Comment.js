import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

const Comment = ({
  id,
  title,
  author,
}) => (
  <Card>
    <Card.Body>
      <Card.Title>
        Author
      </Card.Title>
      {id}
      {author}
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
