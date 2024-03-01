import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { Fade } from "react-awesome-reveal";

import './main.css'
import doc from './doc/rek.doc'


function Main() {



  return (
    <Container>
       
        <Row>
          
       
            <Col id='main' md={12} lg={12}>
            <Fade duration={1000}>
                <div className='main-info visibleMain'>
                    <h1> " Przedszkole to drugi dom</h1>
                    <h2>w którym Wasze dzieci <br></br> 
                      spędzają dużo czasu, uczą się i rozwijają, <br></br>
                      a nauczyciele pełnią rolę rodziców... "
                    </h2>
                </div>
              </Fade>
              
                
            </Col>
           
        </Row>
<Fade  delay={500}>
        <Row className='main-info-container visible-main-info-container'>
          
          <Col > 
            <h2>Opłaty za korzystanie z przedszkola</h2>
            <p>Od stycznia 2023 roku zmianie ulegają opłaty za korzystanie z przedszkola:</p>
            <p>Dzienna stawka żywieniowa wynosi:</p>
            <ul>
              <li> 3,3 zł - I śniadanie</li>
              <li>2,2 zł - II śniadanie</li>
              <li>5,5 zł - obiad</li>
           


            </ul>
            <p>Miesięczna opłata za świadczenia wynosi: </p>
            <p>• 1,30 zł za każdą dodatkową godzinę,</p> 
            <p>• 0,65 zł dla rodzin objętych programem „Krakowska Karta Rodzinna 3 +” lub „Kraków dla Rodziny N” </p>
            <p>• ponad 5 bezpłatnych godzin , miedzy 8:00-13:00</p>
            
         </Col>
         
         
          <Col className='main-info2'> <h2>Ważne informacje</h2>
          <div>
              <h3>Grypa w przedszkolu</h3>
              <p>Szanowni Rodzice zachęcamy do zapoznania sie z Ogólnopolskim Program Zwalczania Grypy. Broszura do pobrania w formacie pdf pdf A tutaj link do strony programu.</p>
              <a href={doc} target="_blank" rel="alternate" media="print">example</a>mjj
              

          </div>
          </Col>
        </Row>
        </Fade>
        
        
    </Container>
  )
}

export default Main