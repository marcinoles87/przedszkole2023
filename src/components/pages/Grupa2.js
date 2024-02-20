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

  const docRef = await addDoc(collection(db,'images'), {
    text : inputField1 ,
    description : inputField2

  })


}


  return (
    <>

    <div className='group-header'>
      <h2>Co nowego w grupie 2</h2>
     

    </div>
    <div className='group-container'>
     
    </div>
   <button className='group-button'><Link to={'/'} style={ {color:'white' , textDecoration:'none'}}>Powrot do strony glownej</Link></button>

   </>
  )
}
export default Grupa2