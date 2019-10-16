import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Column from '../column/Column';
import CardList from '../card-list';
import { useStateValue } from '../../state';

function getCardFromColumn(cards, id) {
  return cards.filter((item) => item.column === id);
}

const ColumnList = ({ columns }) => {
  const [{ cards }] = useStateValue();

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
      id: PropTypes.number,
      title: PropTypes.string,
    }),
  ).isRequired,
};

export default ColumnList;
