import React from 'react';
import './styleGrup.css';
import img1 from '/web frontend/projekty React/przedszkole2023/src/img/kids.png';
import { Link } from 'react-router-dom';

function Grupa2() {
  
  const wydarzenia = [ 
    {
      name : 'Wyjscie do kina' ,
      data : '12-12-2023' ,
      description : ' lorem ipsum lorem ipsum lorem ipsum lorem ipsum vlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum' ,
      img1 : img1
    },

    {
      name : 'Wyjscie do kina' ,
      data : '12-12-2023' ,
      description : ' lorem ipsum lorem ipsum lorem ipsum lorem ipsum vlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum' ,
      img1 : img1

    },

    {
      name : 'Wyjscie do kina' ,
      data : '12-12-2023' ,
      description : ' lorem ipsum lorem ipsum lorem ipsum lorem ipsum vlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum' ,
      img1 : img1

    },

    {
      name : 'Wyjscie do kina' ,
      data : '12-12-2023' ,
      description : ' lorem ipsum lorem ipsum lorem ipsum lorem ipsum vlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum' ,
      img1 : img1

    }
  ]
  return (
    <>
    
    <div className='group-header'>
      <h2>Co nowego w grupie 2</h2>
     

    </div>
    <div className='group-container'>
      {wydarzenia.map( (item, index) => {
        return(
          <div className='group-element' key={index}>
           <h1>{item.name}</h1>
           <h3>{item.data}</h3>
           <p>{item.description}</p>
          <img src={item.img1}></img>
          </div>
        )
      })}
    </div>
   <button><Link to={'/'}>powrot do strony glownej</Link></button>

   </>
  )
}

export default Grupa2