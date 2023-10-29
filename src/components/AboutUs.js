import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function AboutUs() {
  return (
    <Container id='about'>
       <Row>
        <Col>
          <h1>O naszym przedszkolu ...</h1>
          <p>Przedszkole usytuowane jest w budynku piętrowym, wolnostojącym. Dysponuje kilkoma jasnymi obszernymi salami zajęć, łazienkami i dużą szatnią. Na naszym terenie znajduje się piękny, zmodernizowany ogród bogaty w zieleń. Dodatkowo posiadamy bogatą bazę dydaktyczną oraz sprzęt sportowy.Naszym celem jest wspomaganie i ukierunkowanie rozwoju dziecka zgodnie z jego wrodzonym potencjałem w relacjach ze środowiskiem społeczno-kulturowym i przyrodniczym.</p>
        </Col>
       </Row>
      </Container>
  )
}

export default AboutUs