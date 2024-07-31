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

          <h2 >SPOTKANIE ADAPTACYJNE </h2>
            <p>Serdecznie zapraszamy na spotkanie adaptacyjne dla dzieci 3 letnich rozpoczynających
              edukację w naszym przedszkolu. <b>29 SIERPNIA 2024 r. w godzinach 10.00 do 12.00 w sali grupy I .</b>
              PROSIMY O ZABRANIE OBUWIA NA ZMIANĘ DLA DZIIEC I RODZICÓW.
              Zapraszamy.</p>

          
          </Col>
          
          <Col > 
            <h2>OPŁATY ZA KORZYSTANIE Z PRZEDSZKOLA</h2>
            <p><b>Od 1 sierpnia 2024 roku</b> zmianie ulegają opłaty za korzystanie z przedszkola:</p>
            <p>Dzienna stawka żywieniowa wynosi:</p>
            <ul>
              <li> 3,6 zł - I śniadanie</li>
              <li>2,4 zł - II śniadanie</li>
              <li>6 zł - obiad</li>
           


            </ul>
            <p>Miesięczna opłata za świadczenia wynosi: </p>
            <p>• 1,30 zł za każdą dodatkową godzinę,</p> 
            <p>• 0,65 zł dla rodzin objętych programem „Krakowska Karta Rodzinna 3 +” lub „Kraków dla Rodziny N” </p>
            <p>• ponad 5 bezpłatnych godzin , miedzy 8:00-13:00</p>
            
         </Col>
         
         
          <Col className='main-info2'> <h2>Ważne informacje</h2>
          <div>
              <h3>INFORMACJA DLA WSZYSTKICH RODZICÓW, KTÓRYCH DZIECI BĘDĄ UCZĘSZCZAĆ DO PRZEDSZKOLA nr 111 OD 1 WRZEŚNIA 2024</h3>
             <p>
              <b>Od 22 kwietnia do 7 maja 2024 r.</b> rodzice wszystkich dzieci, które będą uczęszczać do przedszkola od 1 września 2024 (dotyczy rodziców dzieci nowych, zakwalifikowanych do przedszkola oraz dzieci kontynuujących) muszą potwierdzić wolę przyjęcia poprzez wypełnienie i podpisanie druku, który będzie dostępny w kancelarii w godzinach od 7:00 do 15:00.

              Nie potwierdzenie woli przyjęcia w wyznaczonym terminie będzie równoznaczne z rezygnacją z przyjęcia dziecka do naszego przedszkola.
              <b>8 maja 2024 r. od godz. 9:00 </b>nastąpi ogłoszenie list przyjętych i nieprzyjętych oraz liczby wolnych miejsc.</p>
              

          </div>
          </Col>
        </Row>
        </Fade>
        
        
    </Container>
  )
}

export default Main