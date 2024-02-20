import React, { useState } from 'react';
import './styleGrup.css';
import { Link } from 'react-router-dom';
import { getFirestore , getDoc , collection, addDoc } from 'firebase/firestore';


function Grupa2() {

const [inputField1 , setInputField1] = useState('')
const [inputField2 , setInputField2] = useState('')

const db = getFirestore();

console.log(db)

const saveDataToFireStore = async () => {

  const docRef = await addDoc(collection(db,'newText'), {
    text : inputField1 ,
    description : inputField2

  });
  alert('data base update')


}


  return (
    <>

    <div className='group-header'>
      <h2>Co nowego w grupie 2</h2>
     

    </div>
    <div className='group-container'>
    <label>Nazwa wydarzenia</label>
      <input type='text' name='wydarzenie' value={inputField1} onChange={ (e) =>setInputField1(e.target.value)}/>
      <br/>

      <label>Nazwa wydarzenia</label>
      <input type='text' name='wydarzenie' value={inputField2} onChange={ (e) =>setInputField2(e.target.value)}/>
      <br/>

      <button onClick={saveDataToFireStore}>Zapisz</button>

      
    </div>
   <button className='group-button'><Link to={'/'} style={ {color:'white' , textDecoration:'none'}}>Powrot do strony glownej</Link></button>

   </>
  )
}
export default Grupa2