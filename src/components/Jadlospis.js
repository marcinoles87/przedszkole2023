import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import Table from 'react-bootstrap/esm/Table'
import Container from 'react-bootstrap/esm/Container'
import page2 from './pages/jadlospis.html'

function Jadlospis() {
  return (
    <Container className='jadlospis'>
 
        <h1>Jadłospis</h1>
        <a href={page2}>kliknij aby obejrzec caly tydzien</a>
        <Table striped bordered hover variant="success" style={{textAlign:'center'}}>
            <thead> 
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