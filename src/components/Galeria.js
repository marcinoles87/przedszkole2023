import React, { useState } from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import im1 from '../img/kids2.jpg'


function Galeria() {

const [modal , setModal] = useState(false);

  const handleOnClick = (e) => {

    console.log(e.target.alt)

    let el = document.querySelector('#galImg');
    el.classList.toggle('modal')
    setModal(!modal)

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

              
              {modal && <div className='drop'></div>}
              <img id='galImg' src={im1} alt='1' onClick={handleOnClick}></img>
              <img id='galImg' src={im1} alt='2' onClick={handleOnClick}></img>
              <img id='galImg' src={im1} alt='3' onClick={handleOnClick}></img>
              <img id='galImg' src={im1} alt='4' onClick={handleOnClick}></img>
              
             
              
            </div>
            </Col>
          </Row>
        
      </Container>
    </div>
  )
}

export default Galeria