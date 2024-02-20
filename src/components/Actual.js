import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import ActualCard from './ActualCard'
import img1 from '../img/kids.png'
import kadra from '../img/kadra.png'
import rodzice from '../img/rodzice.jpg'
import jedzenie from '../img/jedzenie.png'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react'
import Button from 'react-bootstrap/esm/Button'


function Actual() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  

    const actual = [
        {
            title: "Jedzenie" ,
            descirption : " informacje na temat żywienia " ,
            imgUrl : jedzenie ,
            info : 'sssssssss'
        },

        {
            title: "Dla rodzicow " ,
            descirption : "wsluchaj sie w swoje dziecko ... " ,
            imgUrl : rodzice,
            info : 'bbbbbbbbb'
        },

        {
            title: "Kadra" ,
            descirption : "kadra naszego przedszkola " ,
            imgUrl : kadra,
            info : 'Dyrektor : Małgorzata XXX , grupa 1 : XX XXXXX , grupa 2 : XXXXXX  , grupa 3 XXX XXXX'
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
            {actual.map( (item,index) => {
                return(
                    <div key={index}>
                    <Col md={4} className="d-flex justify-content-center " key={index}>
                    <ActualCard  title={item.title} text={item.descirption} image={item.imgUrl} show={show} setShow={setShow} info={item.info}></ActualCard>
                    
                    </Col>
                   
                     
                        </div>
                    
                )
            })}
           
        </Row>
    </Container>
  )
}

export default Actual