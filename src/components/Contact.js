import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

import mapa from '../img/mapa.png'

function Contact() {
  return (
    <Container id='contact' className='contact-form'>
        <Row>
            <Col><h1> Kontakt</h1></Col>
        </Row>
        <Row className='d-flex text-align-center'>
            <Col>
              

                <div className='contact-info'>
                    <i className="fa fa-house fa-2xl"></i><p>Adres : os na Stoku 1</p>
                    <i className="fa fa-envelope fa-2xl"></i><p>Email : przedszkole111@wp.pl</p> 
                    <i className="fa fa-phone fa-2xl"></i><p> Telefon : 12-666-666-666</p>
                </div>

                    <div className='contact-info'>
                        <h4>Godziny pracy sekretariatu</h4>
                        <p>Poniedziałek	8:00 - 16:00</p>
                        <p> Wtorek	8:00 - 16:00</p>
                        <p>Środa	8:00 - 16:00</p>
                        <p>Czawartek	8:00 - 16:00</p>
                        <p>Piątek	8:00 - 16:00</p>
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