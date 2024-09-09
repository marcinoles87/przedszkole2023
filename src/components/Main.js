import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { Fade } from "react-awesome-reveal";

import './main.css'



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

          <h2 >Zebranie rodziców </h2>
            <p>Szanowni Państwo, serdecznie zapraszamy na zebranie rodziców, które odbędzie się w dniu 04.09.2024 r. (tj. środa) o godz. 17:00.
Prosimy o przyjście bez dzieci.</p>

          
          </Col>
          
          <Col > 
            <h2>OPŁATY ZA KORZYSTANIE Z PRZEDSZKOLA</h2>
            <p><b>Od 1 września 2024 roku</b> opłata za korzystanie z przedszkola wynosi:</p>
            <p>Dzienna stawka żywieniowa:</p>
            <ul>
              <li> 3,6 zł - I śniadanie</li>
              <li>2,4 zł - II śniadanie</li>
              <li>6 zł - obiad</li>
  


            </ul>
            <p>Miesięczna opłata za pobyt: </p>
            <p>•bezpłatne od 8.00-13.00 oraz dla dzieci odbywających roczne przygotowanie przedszkolne</p>
            <p>•1,44 zł/za godzinę dla pozostałych dzieci</p> 
            <p>• 0,72zł dla rodzin objętych programem „Krakowska Karta Rodzinna 3 +” lub „Kraków dla Rodziny N” </p>
            <p><b>Numer konta do wpłat : 22 1020 2892 0000 5402 0590 4059</b></p>
            <p>W tytule płatności prosimy wpisywać : OPŁATA ZA PRZEDSZKOLE NR 111 ZA MIESIĄC ...</p>
            
         </Col>
         
         
        
        </Row>
        </Fade>
        
        
    </Container>
  )
}

export default Main