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
            
                <h2>Dane Adresowe Naszego przedszkola:</h2>
                <div className='contact-info'>
                <ul>
                    <li>Adres : os. Na Stoku 21, 31-704 Kraków</li>
                    <li>Email : przedszkole111@wp.pl</li>
                    <li>Telefon : 12-666-666-666</li>
                    </ul>
                
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