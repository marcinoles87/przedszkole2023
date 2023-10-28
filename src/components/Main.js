import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

import img1 from '../img/headerimg.jpg'


function Main() {
  return (
    <Container>
        <Row>
            <Col>
                <img src={img1} alt='przedszkole img'></img>
            </Col>
        </Row>
    </Container>
  )
}

export default Main