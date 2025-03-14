import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { Fade } from "react-awesome-reveal";

import './main.css'

import doc1 from './doc/DEKLARACJA.doc'
import doc2 from './doc/KARTAZAPISU.docX'






function Main() {

    const deklaracja = <a href={doc1}> deklaracje</a>
    const kartaZapisu = <a href={doc2}> karte zapisu</a>
  



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

          <h2>DYŻUR WAKACYJNY 2025 DLA DZIECI UCZĘSZCZAJĄCYCH do Przedszkola nr 111 „Pod Modrzewiem” </h2>
<p>Dyżur wakacyjny w naszym przedszkolu będzie odbywał się w lipcu.
Rodzice dzieci chętnych na dyżur w lipcu, w naszej placówce wypełniają
{deklaracja}. Wypełnioną i podpisaną deklarację można złożyć u osoby
pełniącej dyżur w szatni lub bezpośrednio w kancelarii przedszkola, czynnej
w godzinach od 7:00 do 15:00.
Składanie deklaracji będzie odbywać się w dniach od 17 do 28 marca 2025 r.
W sierpniu nasze przedszkole będzie zamknięte.
Rodzice dzieci chętnych na dyżur wakacyjny w innym przedszkolu,
wypełniają {kartaZapisu}, podbijają ją pieczątką naszej placówki i zanoszą do
przedszkola, którym są zainteresowani.
Deklaracje i karty zapisu będą dostępne w wersji papierowej w szatni
od 17 marca 2025 r. lub będzie można je wydrukować ze strony internetowej
przedszkola.</p>

<h3>ЧЕРГУВАННЯ ЛІТО 2025
ДЛЯ ДІТЕЙ, ЯКІ ВІДВІДУЮТЬ
дитячий садок № 111 &quot;Pod Modrzewiem&quot;</h3>

<p> 17 по 28 березня 2025 року ви будете мати змогу зареєструвати дитину на літнє
чергування в нашому дитячому садку.
В серпні наш дошкільний заклад буде закритий. 
Батьки дітей, які бажають відвідувати  інший дитячий садок в серпні, заповнюють
реєстраційну форму, підтверджують її печаткою нашого закладу і несуть в
дитячий садок, який їх цікавить.
В нашому дитячому садку чергування відбудеться в липні.
Батьки дітей, які бажають відвідувати наш дитячий в липні, заповнюють
декларацію в нашому закладі.
Паперові декларації та реєстраційні картки будуть доступні в гардеробі з 17
березня 2025 року.
Заповнену та підписану декларацію просимо надати черговому в гардеробі або
занести безпосередньо  до канцелярії дитячого садка, що працює з 7.00 до 15.00. </p>
                  
                  

          
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