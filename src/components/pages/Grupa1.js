import React from 'react'
import { Link } from 'react-router-dom'
import './styleGrup.css'
import img1 from '/web frontend/projekty React/przedszkole2023/src/img/kids.png'
import img2 from '/web frontend/projekty React/przedszkole2023/src/img/kids2.jpg'
import img3 from '/web frontend/projekty React/przedszkole2023/src/img/logo3.png'


function Grupa1() {

  const handleOnClickGroup = (e) => {

   
    let el = e.target;
    console.log(el)
    el.classList.toggle('img-modal')
    console.log(el)

  }



  const wydarzenia = [ 
    {
      name : 'Wyjscie do kina' ,
      data : '12-12-2023' ,
      description : ' lorem ipsum lorem ipsum lorem ipsum lorem ipsum vlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum' ,
      img1 : img1,
      img2 : img2,
      img3 : img3
    },

    {
      name : 'Wyjscie do kina' ,
      data : '12-12-2023' ,
      description : ' lorem ipsum lorem ipsum lorem ipsum lorem ipsum vlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum' ,
      img1 : img1 ,
      img2 : img2 ,
      img3 : img3


    },

    {
      name : 'Wyjscie do kina' ,
      data : '12-12-2023' ,
      description : ' lorem ipsum lorem ipsum lorem ipsum lorem ipsum vlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum' ,
      img1 : img1,
      img2 : img2,
      img3 : img3

    },

    {
      name : 'Wyjscie do kina' ,
      data : '12-12-2023' ,
      description : ' lorem ipsum lorem ipsum lorem ipsum lorem ipsum vlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum' ,
      img1 : img1,
      img2 : img2,
      img3 : img3

    }
  ]
  return (
    <>

    <div className='group-header'>
      <h2>Co nowego w grupie 1</h2>
     

    </div>
    <div className='group-container'>
      {wydarzenia.map( (item, index) => {
        return(
          <div className='group-element' key={index}>
           <h1>{item.name}</h1>
           <h3>{item.data}</h3>
           <p>{item.description}</p>

            <div className='group-images'>
            
              <img src={item.img1} alt='kids1' onClick={handleOnClickGroup} className='img-group'></img>
              <img src={item.img2} alt='kids2' onClick={handleOnClickGroup} className='img-group'></img>
              <img src={item.img3} alt='kids3' onClick={handleOnClickGroup} className='img-group'></img>
              </div>
         
          </div>
        )
      })}
    </div>
   <button className='group-button'><Link to={'/'} style={ {color:'white' , textDecoration:'none' , padding:'10px'}}>Powrot do strony glownej</Link></button>

   </>
  )
}

export default Grupa1