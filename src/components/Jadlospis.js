import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import Table from 'react-bootstrap/esm/Table'
import Container from 'react-bootstrap/esm/Container'


function Jadlospis() {

  const meals = [
    {
      śniadanie : 'chleb , ogorek , szynka' ,
      podwieczorek : 'mus jablkowy , herbatka' ,
      obiad : 'zupa pomidorowa , ziemniaki z kotletem schabowym i surowka' ,
    } ,

    {
      śniadanie : 'chleb , ogorek , szynka' ,
      podwieczorek : 'mus jablkowy , herbatka' ,
      obiad : 'zupa pomidorowa , ziemniaki z kotletem schabowym i surowka' ,
    } ,

    {
      śniadanie : 'chleb , ogorek , szynka' ,
      podwieczorek : 'mus jablkowy , herbatka' ,
      obiad : 'zupa pomidorowa , ziemniaki z kotletem schabowym i surowka' ,
    } ,

    {
      śniadanie : 'chleb , ogorek , szynka' ,
      podwieczorek : 'mus jablkowy , herbatka' ,
      obiad : 'zupa pomidorowa , ziemniaki z kotletem schabowym i surowka' ,
    } , 

    {
      śniadanie : 'chleb , ogorek , szynka' ,
      podwieczorek : 'mus jablkowy , herbatka' ,
      obiad : 'zupa pomidorowa , ziemniaki z kotletem schabowym i surowka' ,
    } ,
  ]
  return (
    <Container id='jadlospis' className='jadlospis'>
 
        <h1>Jadłospis</h1>
        <Table striped bordered hover variant="success" style={{textAlign:'center'}}>
            <thead> 
              <tr>
                <th>Dzień</th>
                <th>Sniadanie</th>
                <th>II Sniadanie</th>
                <th>Obiad</th>
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