import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Column from '../column/Column';
import CardList from '../card-list';

function getCardFromColumn(cards, id) {
  return cards.filter((item) => item.column === id);
}

const ColumnList = ({ columns }) => {
  const cards = useSelector((state) => state.cards);

  return (
    <Row>
      {columns.map((item) => (
        <Col key={item.id}>
          <Column title={item.title} id={item.id}>
            <CardList cards={getCardFromColumn(cards, item.id)} />
          </Column>
        </Col>
      ))}
    </Row>
  );
};

ColumnList.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
    }),
  ).isRequired,
};

export default ColumnList;
