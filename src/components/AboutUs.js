import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function AboutUs() {
const aboutSection = document.querySelector('.about-info');
  const aboutSection2 = document.querySelector('.about-info2');
  
  window.onscroll = function() {myFunction()};

  

  const myFunction = () => {
    if(document.documentElement.scrollTop > 1700){
      
      aboutSection.classList.add('visible')
      aboutSection2.classList.add('visible')
    }
    else{
       aboutSection.classList.remove('visible')
       aboutSection2.classList.remove('visible')
    }}

  return (
    <Container id='about'>
       <Row>
        
        
      <Col>
          <div className='about-info'>
            <h3>O  Nas</h3>
            <p>Przedszkole usytuowane jest w budynku piętrowym, wolnostojącym. Dysponuje kilkoma jasnymi obszernymi salami zajęć, łazienkami i dużą szatnią. Na naszym terenie znajduje się piękny, zmodernizowany ogród bogaty w zieleń. Dodatkowo posiadamy bogatą bazę dydaktyczną oraz sprzęt sportowy.Naszym celem jest wspomaganie i ukierunkowanie rozwoju dziecka zgodnie z jego wrodzonym potencjałem w relacjach ze środowiskiem społeczno-kulturowym i przyrodniczym.</p>

            <p>Gwarantujemy:</p>
              <ul>
                <li>odpowiednio dobrany zespół kompetentnych nauczycieli o wysokich kwalifikacjach i doświadczeniu pedagogicznym</li>
                <li>gotowość pełnej współpracy z rodzicami</li>
                <li>opracowany i znany rodzicom plan rozwoju przedszkola</li>
              <li>prowadzenie działalności w oparciu o "Podstawę Programową" obudowaną nowatorskimi programami edukacyjnymi oraz autorskimi nauczycieli </li>

              </ul>
      </div> 
      </Col>

      <Col>

        <div className='about-info2'>
           <h3>Jeśli wybierając przedszkole dla swojego dziecka pragniecie aby:</h3>
            <ul>
                  <li>zapewniło wysoki poziom wychowania i kształcenia</li>
                  <li>zachęcało do działania i osiągnięcia sukcesów</li>
                  <li>zapewniało bezpieczeństwo       </li>
                  <li>   ułatwiało świadomość prozdrowotną    </li>
                  <li>     rozwijało wrażliwość estetyczną  </li>
                  <li>       pogłębiało zdolność twórczego myślenia</li>
                  <li>       rozbudzało potrzebę współdziałania ze środowiskiem społeczno-kulturowym i przyrodniczym</li>
                  <li>       uwrażliwiło moralnie</li>
                  <li>       dążyło do harmonizowania wiedzy o zdrowiu i jego profilaktyce</li>
                  <li>       rozwijało umiejętności i nawyki prozdrowotne</li>
                  <li>       uświadamiało, że człowiek jest częścią przyrody, podlega wszystkim jej prawom i jest od niej uzależniony</li>
                  <li>       kształtowało własne "Ja" w harmonii ze środowiskiem</li>
                  <li>       łączyło aktywność ruchową z poznawaniem środowiska przyrodniczego</li>
        
            </ul>
        </div>

      
       
      </Col>

       
       </Row>
      </Container>
  )
}

export default AboutUs