import React from 'react'
import { Link } from 'react-router-dom'

function Grupa1() {

  const wydarzenia = [ 
    {
      name : 'Wyjscie do kina' ,
      data : '12-12-2023' ,
      description : ' lorem ipsum lorem ipsum lorem ipsum lorem ipsum vlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum' ,

    },

    {
      name : 'Wyjscie do kina' ,
      data : '12-12-2023' ,
      description : ' lorem ipsum lorem ipsum lorem ipsum lorem ipsum vlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum' ,

    },

    {
      name : 'Wyjscie do kina' ,
      data : '12-12-2023' ,
      description : ' lorem ipsum lorem ipsum lorem ipsum lorem ipsum vlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum' ,

    },

    {
      name : 'Wyjscie do kina' ,
      data : '12-12-2023' ,
      description : ' lorem ipsum lorem ipsum lorem ipsum lorem ipsum vlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum' ,

    }
  ]
  return (
    <>
    <div>Grupa1</div>
    <div className='group-container'>
      {wydarzenia.map( (item) => {
        return(
          <>
           <h1>{item.name}</h1>
           <h3>{item.data}</h3>
           <p>{item.description}</p>
          </>
        )
      })}
    </div>
   <button><Link to={'/'}>powrot do strony glownej</Link></button>

   </>
  )
}

export default Grupa1