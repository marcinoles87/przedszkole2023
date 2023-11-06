import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import ActualCard from './ActualCard'
import img1 from '../img/kids.png'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react'


function Actual() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  

    const actual = [
        {
            title: "Jedzenie" ,
            descirption : "build app " ,
            imgUrl : img1 ,
            info : 'sssssssss'
        },

        {
            title: "Wycieczka" ,
            descirption : "build app " ,
            imgUrl : img1,
            info : 'bbbbbbbbb'
        },

        {
            title: "Rodzice" ,
            descirption : "build app " ,
            imgUrl : img1,
            info : 'aaaaaaaaa'
        },

        
    ]
  return (
    <Container id='info'>

        <Row>
            <Col style={{textAlign : 'center' , marginTop:120 , marginBottom: 50}}>
                <h1>Aktualności</h1>
            </Col>
        </Row>
        <Row>
            {actual.map( (item) => {
                return(
                    <>
                    <Col md={4} className="d-flex justify-content-center">
                    <ActualCard  title={item.title} text={item.descirption} image={item.imgUrl} show={show} setShow={setShow}></ActualCard>
                    </Col>
                   
                          <Offcanvas show={show} onHide={handleClose}>
                          <Offcanvas.Header closeButton>
                            <Offcanvas.Title>{item.title}</Offcanvas.Title>
                          </Offcanvas.Header>
                          <Offcanvas.Body>
                            {item.info}
                          </Offcanvas.Body>
                        </Offcanvas>
                        </>
                    
                )
            })}
           
        </Row>
    </Container>
  )
}

export default Actual