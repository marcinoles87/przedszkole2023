import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { Fade } from "react-awesome-reveal";

import './main.css'

import doc1 from './doc/W2025.pdf'
import doc2 from './doc/KARTAZAPISU.docX'






function Main() {

    const wniosek = <a href={doc1}> wniosek</a>
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

          <h2>Rekrutacja dzieci nowych na 2025/2026

rok trwa nadal !!!</h2>

<p>Wypełniony i podpisany {wniosek} można składać w
kancelarii Przedszkola codziennie w godz. 7:00 do 15:00.</p>
<h2>Przyjmujemy dzieci od 2,5 do 6 roku życia</h2>
<p>Oferujemy:</p>
<p>- opiekę do 5 godzin bezpłatnie,</p>
<p>- wykwalifikowaną, doświadczoną kadrę,</p>
<p>- opiekę specjalistów: <b>psycholog i logopeda,</b></p>
<p>- dodatkową pomoc nauczyciela w grupie,</p>
<p>- przestronne, jasne sale,</p>
<p>- duży, wyposażony ogród,</p>
<p>- pyszną domowa kuchnię.</p>

<h2>W ofercie bezpłatne zajęcia edukacyjne:</h2>
<p>- zajęcia muzyczno-taneczne (rytmika) oraz przyrodnicze, plastyczne,
muzyczne, matematyczne, ogólnorozwojowe,</p>
<p>- język angielski,</p>
<p>- teatrzyki,</p>
<p>- kółka zainteresowań i wiele innych.</p>
<p>Respektujemy:</p>
<p>- Krakowską Kartę Rodzinną 3+</p> 
<p>- kartę z programu Kraków dla Rodziny N.</p>

<p><b>Przyjdź i zobacz Os. Na Stoku 21 – zapraszamy w każdą
środę do oglądania Przedszkola od godziny 15:00-16:00 </b></p>

                  
                  

          
          </Col>
          
          {/* <Col > 
            
            <h1>DZIEŃ ADAPTACYJNY</h1>
            <p>Serdecznie zapraszamy przyszłych przedszkolaków do  <b> Samorządowego Przedszkola nr 111 „Pod Modrzewiem’’
            na DZIEŃ ADAPTACYJNY, </b>który odbędzie się 29 sierpnia 2025 r. (piątek)
            w godzinach od 10:00 do 12:00.</p>
             

            <h1>SZATNIA w lipcu</h1>
            <p>Szanowni Państwo,</p>
            <p>z powodu urlopu personelu rano szatnia jest czynna:</p>
            <p>od 6:00 do 8:00</p>
            <p>od 8:45 do 9:00</p>







           
            
         </Col> */}

         

         
         
         
        
        </Row>
        </Fade>
        
        
    </Container>
  )
}

export default Main