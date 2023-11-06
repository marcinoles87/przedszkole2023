import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import cardImg from '../img/headerimg.jpg'

import { useState } from 'react';

function ActualCard({title,text,image,show,setShow}) {



   
    const handleShow = () => setShow(true);
 
    
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


    
  
    

    </>
    
  )
}

export default ActualCard