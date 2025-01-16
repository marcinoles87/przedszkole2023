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




function Actual() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  const link = <a href={doc}> link</a>
  const standardy = <a href={sta}>link</a>
  const kier = <a href={kiermasz} >link</a>
  const jubileuszLink = <a href='https://gazetakrakowska.pl/krakow-przedszkole-pod-modrzewiem-swietuje-60-urodziny-beda-warsztaty-cyrkowe-wesole-miasteczko-i-slodki-poczestunek/ar/c5-18586507'>link</a>
 

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
            title: "Dla rodzicow " ,
            descirption : "Rekrutacja do przedszkola (AKTUALIZACJA MAJ) " ,
            imgUrl : rodzice,
            info : `Rekrutacja na rok 2024 , aby uzyskać więcej informacji kliknij w link lub przejdż do zakładki REKRUTACJA na stronie głównej ` ,
            link : link
            
        },

        {
            title: "Kadra" ,
            descirption : "Kadra naszego przedszkola " ,
            imgUrl : kadra,
            info : ` Dyrektor mgr Magdalena Kulpa, referent mgr Katarzyna Dziki.  GR I mgr. Magdalena Topa , mgr.Magdalena Kulpa , GR II mgr.Monika Klimczyk , mgr.Beata Urantówka , GR III mgr.Katarzyna Zdankiewicz , mgr.Małgorzata Dziki , GR IV mgr.Małgorzata Sobucka , mgr.Małgorzata Klocek , GR V mgr.Jolanta Zmarlak , mgr.Anna Nowak ` ,
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