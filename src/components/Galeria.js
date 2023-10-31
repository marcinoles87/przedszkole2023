import React, { useState } from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import im1 from '../img/kids2.jpg'


function Galeria() {



  const handleOnClick = () => {

    let el = document.querySelector('#galImg');
    el.classList.toggle('modal')
    el.classList.toggle('drop')

  }

  return (
    <div id='gallery'>
      <Container>
        <Row>
          <Col>
            <h1 className='gallery-head'>Galeria naszego przedszkola</h1>
          </Col>
        </Row>

          <Row>
            <Col>
            <div className='gallery-container'>

              
              
              <img id='galImg' src={im1} alt='1' onClick={handleOnClick}></img>
              
             
              
            </div>
            </Col>
          </Row>
        
      </Container>
    </div>
  )
}

export default Galeria