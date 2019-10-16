import React from 'react';
import Container from 'react-bootstrap/Container';
import { useStateValue } from '../../state';
import ColumnList from '../column-list';

const Desk = () => {
  const [{ columns }] = useStateValue();
  return (
    <Container>
      <ColumnList columns={columns} />
    </Container>
  );
};

export default Desk;
