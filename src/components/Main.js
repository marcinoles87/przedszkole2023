import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';


import img1 from '../img/headerimg2.jpg'

import './main.css'


function Main() {
  return (
    <Container>
        <Row>
            <Col id='main' md={12} lg={12}>
                
                <div className='main-info'>
                    <h1>Witamy na naszej Stronie !</h1>
                    <h4>Z kazdym dniem staramy sie dokladac
                      wszelkich staran aby Wasze dzieci czuly sie
                      u Nas w przedszkolu jak najlepiej !
                    </h4>
                </div>
              
                
            </Col>
        </Row>
    </Container>
  )
}

export default Main