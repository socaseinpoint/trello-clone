import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Column from '../column/Column';
import CardList from '../card-list';

const ColumnList = ({ columns }) => (
  <Row>
    {columns.map((item) => (
      <Col key={item.id}>
        <Column title={item.title} id={item.id}>
          <CardList columnId={item.id} />
        </Column>
      </Col>
    ))}
  </Row>
);

ColumnList.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
    }),
  ).isRequired,
};

export default ColumnList;
