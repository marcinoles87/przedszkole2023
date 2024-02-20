import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styleGrup.css'
import axios from 'axios'



function Grupa4() {


  const [inputs , setInputs] = useState({});

  const handleChange = (e) => {

    const name = e.target.name;
    const value = e.target.value;
    
    setInputs( values => ( {...values , [name] : value}))

  }
  const handleSubmit = (e) => {
    e.preventDefault();

    // axios.post('http://localhost:3306/api/' , inputs)
    
  }


  return (
    <>

    <div className='group-header'>

      <h2>Co nowego w grupie 4</h2>

     </div>

    <div className='group-container'>
    
      <form onSubmit={handleSubmit}>

      <label>Nazwa wydarzenia</label>
      <input type='text' name='wydarzenie' onChange={handleChange}/>
      <br/>

      <label>Data</label>
      <input type='date' name='date' onChange={handleChange}/>
      <br/>
      <label>Opis</label>
      <input type='text' name='opis' onChange={handleChange}/>
      <br/>

      <button>Zapisz</button>

      </form>

    </div>
   <button className='group-button'><Link to={'/'} style={ {color:'white' , textDecoration:'none'}}>Powrot do strony glownej</Link></button>

   </>
  )
} 

export default Grupa4