import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { NavLink } from 'react-router-dom';
import { Nav, Container, Navbar, Button } from 'react-bootstrap';
import { SHOP_ROUTE } from '../utils/constants';
import { Context } from '..';

const NavBar: React.FC = () => {
  const { user } = useContext(Context);
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <NavLink to={SHOP_ROUTE} style={{ textTransform: 'uppercase', textDecoration: 'none' }}>
          Магазин техники
        </NavLink>
        {user.isAuth ? (
          <Nav style={{ maxHeight: '100px' }} className="ml-auto">
            <Button>Админ Панель</Button>
            <Button className="ml-2">Выйти</Button>
          </Nav>
        ) : (
          <Nav style={{ maxHeight: '100px' }} className="ml-auto">
            <Button className="mr-5">Админ Панель</Button>
            <Button onClick={() => user.setIsAuth(true)}>Авторизация</Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
};

export default observer(NavBar);
