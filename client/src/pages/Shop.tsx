import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Shop = () => {
  return (
    <Container>
      <Row>
        <Col md={3}>Sidebar</Col>
        <Col md={9}>Products</Col>
      </Row>
    </Container>
  );
};

export default Shop;
