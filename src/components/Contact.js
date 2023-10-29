import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

import mapa from '../img/mapa.png'

function Contact() {
  return (
    <Container className='contact-form'>
        <Row>
            <Col><h1> Kontakt</h1></Col>
        </Row>
        <Row className='d-flex text-align-center'>
            <Col>
              

                <div className='contact-info'>
                    <i class="fa fa-house fa-2xl"></i><p>Adres : os na Stoku 1</p>
                    <i class="fa fa-envelope fa-2xl"></i><p>Email : przedszkole111@wp.pl</p> 
                    <i class="fa fa-phone fa-2xl"></i><p> Telefon : 12-666-666-666</p>
                </div>
            </Col>

            <Col>
                <img src={mapa} alt='mapa'></img>
            </Col>
        </Row>
    </Container>
  )
}

export default Contact