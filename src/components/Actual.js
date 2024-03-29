import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import ActualCard from './ActualCard'
import img1 from '../img/kids.png'

import kiermasz from '../img/kiermasz.jpeg'
import kadra from '../img/kadra.png'
import rodzice from '../img/rodzice.jpg'
import jedzenie from '../img/jedzenie.png'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import doc from './doc/rek.doc'
import dyzur from './pages/Dyzurwakacyjny'




function Actual() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  const link = <a href={doc}> link</a>
  const kier = <a href={kiermasz} >link</a>
 

    const actual = [

       

        {
            title: "Kiermasz wiosenny 2024" ,
            descirption : "informacje na temat zbliżającego sie kiermaszu ..." ,
            imgUrl : kiermasz ,
            info : 'Już wkrótce w naszym przedszkolu rozpocznie sie kiermasz wiosenny , więcej informacji pod linkiem ',
            link : kier

        },



        {
            title: "Jedzenie" ,
            descirption : " informacje na temat żywienia " ,
            imgUrl : jedzenie ,
            info : 'W kontekście jedzenia w przedszkolu warto zwrócić uwagę, że posiłki powinny być odpowiednio zbilansowane pod względem wartości odżywczych i dostosowane do potrzeb rozwojowych dzieci. Ważne jest, aby promować zdrowe nawyki żywieniowe od najmłodszych lat, oferując świeże i różnorodne posiłki, które będą wspierać rozwój fizyczny i umysłowy maluchów. Ponadto, bezpieczeństwo żywności i higiena podczas przygotowywania posiłków w placówce przedszkolnej są kluczowe dla zapewnienia dobrej kondycji zdrowotnej dzieci i uniknięcia problemów związanych z zatruciami pokarmowymi. Dlatego od samego początku preferujemy zdrowe zbilansowane posiłki dla naszych podopiecznych przygotowane w naszej przedszkolnej kuchni . ',
            link :''
            
        },

        {
            title: "Dla rodzicow " ,
            descirption : "Rekrutacja do przedszkola ... " ,
            imgUrl : rodzice,
            info : `Rekrutacja na rok 2024 , aby uzyskać więcej informacji kliknij w link lub przejdż do zakładki REKRUTACJA na stronie głównej ` ,
            link : link
            
        },

        {
            title: "Kadra" ,
            descirption : "Kadra naszego przedszkola " ,
            imgUrl : kadra,
            info : ' Dyrektor mgr Magdalena Kulpa, referent mgr Katarzyna Dziki.  ' ,
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
                    <>
                    <Col md={4} className="d-flex justify-content-center " key={index}>
                    <ActualCard  title={item.title} text={item.descirption} image={item.imgUrl} show={show} setShow={setShow} info={item.info} link={item.link}></ActualCard>
                    
                    </Col>
                   
                     
                        </>
                    
                )
            })}
           
        </Row>
    </Container>
  )
}

export default Actual