import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import ActualCard from './ActualCard'
import img1 from '../img/kids.png'

import kiermasz from '../img/kiermasz.jpeg'
import kadra from '../img/kadra.png'
import rodzice from '../img/rodzice.jpg'
import jubileusz from '../img/jubileusz.jpg'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import doc from './doc/ogloszenie_uzupelniajace.doc'
import dyzur from './pages/Dyzurwakacyjny'
import sta from './doc/standardy.docx'
import standardyImg from '../img/standardy.jpeg'
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';





function Actual() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  const rekru = <a href='/rekrutacja'>link</a>
  const link = <a href={doc}> link</a>
  const standardy = <a href={sta}>link</a>
  const kier = <a href={kiermasz} >link</a>
  const jubileuszLink = <a href='https://gazetakrakowska.pl/krakow-przedszkole-pod-modrzewiem-swietuje-60-urodziny-beda-warsztaty-cyrkowe-wesole-miasteczko-i-slodki-poczestunek/ar/c5-18586507'>link</a>
  const kadraInfo = <p> Dyrektor mgr  Magdalena Kulpa, referent mgr Katarzyna Dziki. <br></br>
              <br></br>
              GR I mgr Magdalena Tora , mgr Magdalena Kulpa <br></br> GR II mgr Monika Klimczyk , mgr Beata Urantówka <br></br> GR III mgr Katarzyna Zdankiewicz , mgr Małgorzata Dziki <br></br> GR IV mgr Małgorzata Sobucka , mgr Małgorzata Klocek <br></br> GR V mgr Jolanta Zmarlak , mgr Anna Nowak  ,</p>
 

    const actual = [

        {
            title: "Jubileusz przedszkola " ,
            descirption : "informacje o 60-leciu przedszkola " ,
            imgUrl : jubileusz ,
            info : 'Już wkrótce w naszym przedszkolu rozpoczną sie obchody 60-lecia , więcej informacji pod linkiem ',
            link : jubileuszLink

        },

       


        {
            title: " Standardy  Ochrony Małoletnich " ,
            descirption : " informacje na temat  ochrony małoletnich...  " ,
            imgUrl :standardyImg ,
            info : 'Naczelną zasadą wszystkich działań podejmowanych przez pracowników i współpracowników Samorządowego Przedszkola „Pod Modrzewiem” nr 111 jest działanie dla dobra dziecka i w jego najlepszym interesie. Każdy pracownik i współpracownik ... wiecej pod ' ,
            link : standardy ,
            
        },

        {
            title: "Dla rodziców " ,
            descirption : "Informacje na temat rekrutacji do przedszkola na rok 2025 " ,
            imgUrl : rodzice,
            info : `Rekrutacja na rok 2025 , przejdż do zakładki REKRUTACJA na stronie głównej  ` ,
            link : ''

            
        },

        {
            title: "Kadra" ,
            descirption : "Kadra naszego przedszkola " ,
            imgUrl : kadra,
            info : kadraInfo,
            link : ''
            
            
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
                   
                    <Col md={4} className="d-flex justify-content-center " key={index}>
                    <ActualCard  title={item.title} text={item.descirption} image={item.imgUrl} show={show} setShow={setShow} info={item.info} link={item.link}></ActualCard>
                    
                    </Col>
                   
                     
                        
                    
                )
            })}
           
        </Row>
    </Container>
  )
}

export default Actual