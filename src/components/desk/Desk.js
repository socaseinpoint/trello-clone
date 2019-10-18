import React from 'react';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import ColumnList from '../column-list';
import AddUser from '../add-user';

const Desk = () => {
  const columns = useSelector((state) => state.columns);
  const user = useSelector((state) => state.user);

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
