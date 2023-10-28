import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import ActualCard from './ActualCard'
import img1 from '../img/logo.png'


function Actual() {

    const actual = [
        {
            title: "Development and FrontEnd" ,
            descirption : "build app " ,
            imgUrl : img1
        },

        {
            title: "Development and FrontEnd" ,
            descirption : "build app " ,
            imgUrl : img1
        },

        {
            title: "Development and FrontEnd" ,
            descirption : "build app " ,
            imgUrl : img1
        },

        {
            title: "Development and FrontEnd" ,
            descirption : "build app " ,
            imgUrl : img1
        } ,

        {
            title: "Development and FrontEnd" ,
            descirption : "build app " ,
            imgUrl : img1
        } ,

        {
            title: "Development and FrontEnd" ,
            descirption : "build app " ,
            imgUrl : img1
        }
    ]
  return (
    <Container>

        <Row>
            <Col style={{textAlign : 'center'}}>
                <h1>Aktualności</h1>
            </Col>
        </Row>
        <Row className='align-center'>
            {actual.map( (item) => {
                return(
                    <Col md={4}>
                    <ActualCard  title={item.title} text={item.descirption} image={item.imgUrl}></ActualCard>
                    </Col>
                )
            })}
           
        </Row>
    </Container>
  )
}

export default Actual