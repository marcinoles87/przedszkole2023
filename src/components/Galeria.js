import React, { useState } from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import im1 from '../img/kids2.jpg'


function Galeria() {

 const  [modal , setModal] = useState(false);
 const [img , setImg] = useState('');

  const handleOnClick = (e) => {
    setModal(!modal)
    console.log(modal)
    console.log(e.target)
    let i = e.target
    setImg(i)

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

              {modal && <div className='modal'>{img}</div>}
              
              <img className={modal} src={im1} alt='1' onClick={handleOnClick}></img>
              <img className={modal} src={im1} alt='2' onClick={handleOnClick}></img>
              <img className={modal} src={im1} alt='3' onClick={handleOnClick}></img>
             
              
            </div>
            </Col>
          </Row>
        
      </Container>
    </div>
  )
}

export default Galeria