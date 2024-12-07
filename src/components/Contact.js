import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

import mapa from '../img/mapa.png'

function Contact() {
  return (
    <Container id='contact' className='contact-form'>
        <Row className='contact-heading'>
            <Col><h1> Kontakt</h1></Col>
        </Row>
        <Row className='d-flex text-align-center contact-inf'>
            <Col>
              

                <div className='contact-info'>
                    <i className="fa fa-house fa-2xl"></i><p>Adres : os. na Stoku 21 31-704 Kraków</p>
                    <i className="fa fa-envelope fa-2xl"></i><p>Email : p111@mjo.krakow.pl </p> 
                    <i className="fa fa-phone fa-2xl"></i><p> Telefon/fax : (12) 645-14-80</p>
                </div>

                    <div className='contact-info'>
                        <h4>Godziny pracy sekretariatu</h4>
                        <p>Poniedziałek	8:00 - 15:00</p>
                        <p> Wtorek	8:00 - 15:00</p>
                        <p>Środa	8:00 - 15:00</p>
                        <p>Czwartek	8:00 - 15:00</p>
                        <p>Piątek	8:00 - 15:00</p>
                    </div>
                    
                    
                   
                    
                    
                    
            </Col>

            <Col>
            <a href='https://www.google.com/maps/place/Przedszkole+Samorz%C4%85dowe.+Pod+Modrzewiem/@50.095767,20.052561,17z/data=!3m1!4b1!4m6!3m5!1s0x47164563bb6776a5:0x6fff9981726cd395!8m2!3d50.095767!4d20.0551359!16s%2Fg%2F1tfll51w?entry=ttu'>
                <img src={mapa} alt='mapa'></img>
                </a>
                
            </Col>
        </Row>
    </Container>
  )
}

export default Contact