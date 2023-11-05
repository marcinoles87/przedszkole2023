import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import Container from 'react-bootstrap/esm/Container'

function Jadlospis() {
  return (
    <Container>
      <Row>
        <Col>
        <h1>Jadlospis w tym tygodniu :</h1>
        <ul>Poniedzialek
          <li>Sniadanie : jablko , mus , herbatka</li>
          <li>jalbko , chrupki kukurydziane , napoj</li>
          <li>zupa kalafiorowa , ziemniaki , kotlet , surowka</li>
        </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default Jadlospis