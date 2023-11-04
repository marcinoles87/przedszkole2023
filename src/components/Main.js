import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

import './main.css'


function Main() {

// window.onscroll = function () {handleOnScrool()}

const handleOnScrool = () => {
 
  let elMain = document.querySelector('.main-info')

  console.log(document.documentElement.scrollTop)
  console.log(document.body.scrollTop)
 

  if(document.documentElement.scrollTop > 10){
    elMain.classList.add('visibleMain')
  }else{
    elMain.classList.remove('visibleMain')
  }

}


  return (
    <Container>
        <Row>
            <Col id='main' md={12} lg={12}>
                
                <div className='main-info'>
                    <h1> " Przedszkole to drugi dom</h1>
                    <h2>w którym Wasze dzieci <br></br> 
                      spędzają dużo czasu, uczą się i rozwijają, <br></br>
                      a nauczyciele pełnią rolę rodziców... "
                    </h2>
                </div>
              
                
            </Col>
        </Row>
    </Container>
  )
}

export default Main