import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import Table from 'react-bootstrap/esm/Table'
import Container from 'react-bootstrap/esm/Container'

function Jadlospis() {
  return (
    <Container>
      {/* <Row>
        <Col>
        <h1>Jadlospis w tym tygodniu :</h1>
        <ul>Poniedzialek
          <li>Sniadanie : jablko , mus , herbatka</li>
          <li>jalbko , chrupki kukurydziane , napoj</li>
          <li>zupa kalafiorowa , ziemniaki , kotlet , surowka</li>
        </ul>
        </Col>
      </Row> */}


        <Table striped bordered hover variant="dark" style={{textAlign:'center'}}>
            <thead> Poniedzialek
              <tr>
                <th>Dzień</th>
                <th>Sniadanie</th>
                <th>Obiad</th>
                <th>Kolacja</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Poniedzialek</th>
                <th>jablko , mus , herbatka</th>
                <th>jalbko , chrupki kukurydziane , napoj</th>
                <th>zupa kalafiorowa , ziemniaki , kotlet , surowka</th>
              </tr>

              <tr>
                <th>Wtorek</th>
                <th>jablko , mus , herbatka</th>
                <th>jalbko , chrupki kukurydziane , napoj</th>
                <th>zupa kalafiorowa , ziemniaki , kotlet , surowka</th>
              </tr>

              <tr>
                <th>Sroda</th>
                <th>jablko , mus , herbatka</th>
                <th>jalbko , chrupki kukurydziane , napoj</th>
                <th>zupa kalafiorowa , ziemniaki , kotlet , surowka</th>
              </tr>

              <tr>
                <th>Czwartek</th>
                <th>jablko , mus , herbatka</th>
                <th>jalbko , chrupki kukurydziane , napoj</th>
                <th>zupa kalafiorowa , ziemniaki , kotlet , surowka</th>
              </tr>

              <tr>
                <th>Piatek</th>
                <th>jablko , mus , herbatka</th>
                <th>jalbko , chrupki kukurydziane , napoj</th>
                <th>zupa kalafiorowa , ziemniaki , kotlet , surowka</th>
              </tr>

             
            </tbody>
        </Table>
    </Container>

    
  )
}

export default Jadlospis