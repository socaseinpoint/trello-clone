import React from 'react';
import Container from 'react-bootstrap/Container';
import { useStateValue } from '../../state';
import ColumnList from '../column-list';
import AddUser from '../add-user';

const Desk = () => {
  const [{ columns, user }] = useStateValue();

  return (
    <Container className="mt-4">
      <h1>
        {user && user.name}
      </h1>
      {
        user ? (
          <div><ColumnList columns={columns} /></div>
        ) : (
          <div><AddUser /></div>
        )
      }
    </Container>
  );
};

export default Desk;
