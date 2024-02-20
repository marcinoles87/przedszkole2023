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
          {meals.map( (meals , index) => {
            return(

               
                <tbody key={index}>
                <tr>
                  <th>Poniedzialek</th>
                  <th>{meals.śniadanie}</th>
                  <th>{meals.podwieczorek}</th>
                  <th>{meals.obiad}</th>
                </tr> 
                </tbody>

                
            )
          })}
            

        </Table>
    </Container>

    
  )
}

export default Jadlospis