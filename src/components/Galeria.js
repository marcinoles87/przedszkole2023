import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import images from '../images.json'


function Galeria() {
  return (
    <div id='gallery'>
      <Container>
        <Row>
          <Col>
            <h1>Galeria naszego przedszkola</h1>
          </Col>

          <Col>
            <div className='gallery-container'>
              {images.map( (item) =>{
                return(
                  <img src={item.images} alt=''></img>
                )
              })}
              
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Galeria