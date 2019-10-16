import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { useStateValue } from '../../state';
import ColumnList from '../column-list';
import AddUser from '../add-user';
import { addUser } from '../../actions/user';

const Desk = () => {
  const [{ columns, user }, dispatch] = useStateValue();

  useEffect(() => {
    const localUser = localStorage.getItem('user');

    if (localUser) {
      dispatch(addUser(JSON.parse(localUser).name));
    }
  }, []);

  return (
    <Container>
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
