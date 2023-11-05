import React, { useState } from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import im1 from '../img/kids2.jpg'
import im2 from '../img/kids.png'
import im3 from '../img/headerimg2.jpg'


function Galeria() {

  const handleOnClick = (e) => {
    
    let el = e.target
    const drop = document.querySelector('.drop-enlarge')
    el.classList.toggle('modal')
    drop.classList.toggle('drop')
  
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
              <div className='drop-enlarge'></div>
              <img id='galImg' src={im3} alt='1' onClick={handleOnClick}></img>
              <img id='galImg' src={im3} alt='2' onClick={handleOnClick}></img>
              <img id='galImg' src={im3} alt='2' onClick={handleOnClick}></img>
              <img id='galImg' src={im3} alt='2' onClick={handleOnClick}></img>
              <img id='galImg' src={im3} alt='2' onClick={handleOnClick}></img>
              <img id='galImg' src={im3} alt='2' onClick={handleOnClick}></img>
              <img id='galImg' src={im3} alt='2' onClick={handleOnClick}></img>
              <img id='galImg' src={im3} alt='2' onClick={handleOnClick}></img>
            
            </div>
            </Col>
          </Row>
        
      </Container>
    </div>
  )
}

export default Galeria