import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import AddCard from '../add-card';

const Column = ({ title, children, id }) => (
  <Card>
    <Card.Body>
      <Card.Title>
        <b>{ title }</b>
      </Card.Title>
      <div>
        {children}
      </div>
      <AddCard target={id} />
    </Card.Body>
  </Card>
);

Column.defaultProps = {
  title: 'No title',
};

Column.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Column;
