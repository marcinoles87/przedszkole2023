import React from 'react'
import { Link } from 'react-router-dom'
import './styleGrup.css'
import img1 from '/web frontend/projekty React/przedszkole2023/src/img/kids.png'

function Grupa4() {

  const handleOnClickGroup = (e) => {

   
    let el = e.target
    el.classList.toggle('img-modal')

  }


  return (
    <>

    <div className='group-header'>

      <h2>Co nowego w grupie 4</h2>

     </div>

    <div className='group-container'>
    
      

    </div>
   <button className='group-button'><Link to={'/'} style={ {color:'white' , textDecoration:'none'}}>Powrot do strony glownej</Link></button>

   </>
  )
} 

export default Grupa4