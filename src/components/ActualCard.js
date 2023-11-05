import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import cardImg from '../img/headerimg.jpg'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';

function ActualCard({title,text,image}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const aktualnosci = [
    {
      title :'jedzenie' ,
      data : 'dzis' ,
      info : 'dddddddddddddddddddd ',
     
    },

    {
      title :'wycieczka' ,
      data : 'dzis' ,
      info : 'bbbbbbbbbbb ',
     
    }
  ]
    
  return (
    <>
        <Card style={{ width: '18rem' , marginBottom:20}}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Button variant="primary" onClick={handleShow}>Go somewhere</Button>
      </Card.Body>
    </Card>


    {aktualnosci.map( (item) => {
      return(
        <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{item.title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {item.info}
        </Offcanvas.Body>
      </Offcanvas>
      ) } ) }
  
    

    </>
    
  )
}

export default ActualCard