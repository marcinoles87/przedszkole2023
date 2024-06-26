import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import cardImg from '../img/headerimg.jpg'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';



function ActualCard({title,text,image,info,link}) {



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
 
    
  return (
    <>
        <Card style={{ width: '18rem' , marginBottom:20 , alignContent: 'center'}}>
      <Card.Img variant="top" src={image} style={{height:'170px' , paddingTop:'10px' , objectFit:'contain'}} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Button variant="primary" onClick={handleShow}>Czytaj więcej</Button>
        </Card.Body>
    </Card>

    <Offcanvas show={show} onHide={handleClose}>
                          <Offcanvas.Header closeButton>
                            <Offcanvas.Title>{title}</Offcanvas.Title>
                          </Offcanvas.Header>
                          <Offcanvas.Body>
                            {info} <br></br>
                            {link}
                            
                          </Offcanvas.Body>
                        </Offcanvas>


    
  
    

    </>
    
  )
}

export default ActualCard