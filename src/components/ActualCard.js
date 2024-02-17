import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import cardImg from '../img/headerimg.jpg'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';



function ActualCard({title,text,image,info}) {



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
 
    
  return (
    <>
        <Card style={{ width: '18rem' , marginBottom:20 , alignContent: 'center'}}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Button variant="primary" onClick={handleShow}>Clik to go</Button>
        </Card.Body>
    </Card>

    <Offcanvas show={show} onHide={handleClose}>
                          <Offcanvas.Header closeButton>
                            <Offcanvas.Title>{title}</Offcanvas.Title>
                          </Offcanvas.Header>
                          <Offcanvas.Body>
                            {info}
                          </Offcanvas.Body>
                        </Offcanvas>


    
  
    

    </>
    
  )
}

export default ActualCard