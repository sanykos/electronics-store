import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Container, Form, Card, Button, Row } from 'react-bootstrap';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/constants';

const Auth: React.FC = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: window.innerHeight - 54 }}>
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto mb-2">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <Form className="d-flex flex-column">
          <Form.Control placeholder="Введите еmail" />
          <Form.Control className="mt-5" placeholder="Введите пароль" />
          <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
            {isLogin ? (
              <div>
                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}> Зарегистрируйтесь</NavLink>
              </div>
            ) : (
              <div>
                Есть аккаунт? <NavLink to={LOGIN_ROUTE}> Войдите</NavLink>
              </div>
            )}
            <Button className="align-self-end" variant="outline-success">
              {isLogin ? 'Войти' : 'Регистрация'}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
