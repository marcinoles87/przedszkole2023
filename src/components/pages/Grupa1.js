import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styleGrup.css'
import img1 from '/web frontend/projekty React/przedszkole2023/src/img/kids.png'
import img2 from '/web frontend/projekty React/przedszkole2023/src/img/kids2.jpg'
import img3 from '/web frontend/projekty React/przedszkole2023/src/img/logo3.png'

import JSONDATA from './wydarzenia/wydarzeniaGrupa1.json'


function Grupa1() {

const obj = JSONDATA
console.log(obj.name)

const wydarzenia = [ 
  {
    name : 'Wyjscie do kina' ,
    data : obj.name ,
    description : ' lorem ipsum lorem ipsum lorem ipsum lorem ipsum vlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum' ,
    img1 : img1,
    img2 : img2,
    img3 : img3

  },]

const [ newsArray , setNewsArray] = useState(wydarzenia);
const [ password , setPassword] = useState(false)
 


const addArticle = (e) => {

  const title = document.querySelector('.input-title').value;
  const text = document.querySelector('.input-text').value;
  const dataNow = new Date().toLocaleString();
  const obj = { name: title , description : text , data: dataNow }
  newsArray.push(obj)

  const upDateArray = [...newsArray]

  upDateArray.reverse()
  setNewsArray(upDateArray)
  setPassword(false)
  
}

  

  const handleOnClickGroup = (e) => {
   
    let el = e.target;
    el.classList.toggle('img-modal')

  }

  const passwordCheck = (e) => {
    const pass = document.querySelector('.password').value
    if(pass === 'monika'){
      setPassword(true)
    }
  }


  return (
    <>

    <div className='group-header'>
      <h2 className='group-h'>Co nowego w grupie 1</h2>
    </div>

    <div className='password-field'>
      <input className='password' placeholder='admin field' type='password'></input>
      <button onClick={passwordCheck}></button>
    </div>

    {password ? <div className='addNews-container'>
        <input placeholder='add Title' className='input-title'></input>
        <input placeholder='add text' className='input-text'></input>
        <button onClick={addArticle}>Add</button>
    </div> 
    
    : '' }
   
    <div className='group-container'>

      {newsArray.map( (item, index) => {
        return(
          <div className='group-element' key={index}>
           <h1>{item.name}</h1>
           <p>{item.data}</p>
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