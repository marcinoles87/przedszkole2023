import React, { useState } from 'react';
import './styleGrup.css';
import { Link } from 'react-router-dom';
import { getFirestore , getDoc , collection, addDoc , doc, getDocs } from 'firebase/firestore';


function Grupa2() {

  

const [inputField1 , setInputField1] = useState('')
const [inputField2 , setInputField2] = useState('')
const [inputField3 , setInputField3] = useState('')
const [firestoreValues , setFirestoreValue ] = useState([])
const [password , setPassword] = useState(false)

const passwordCheck = (e) => {
  const pass = document.querySelector('.password').value
  if(pass === 'monikaK'){
    setPassword(true)
  }
}


const db = getFirestore();

console.log(db)

const saveDataToFireStore = async () => {

  const docRef = await addDoc(collection(db,'grupa2'), {
    text : inputField1 ,
    date : inputField2 ,
    description : inputField3

  });
  alert('data base update')


}

const handlefetchData = async () =>{

  const querySnapShot = await getDocs(collection(db,"grupa2"));
  const temporaryBase = []
  console.log(querySnapShot)

  querySnapShot.forEach( (doc) => {
    temporaryBase.push(doc.data())
  });

  setFirestoreValue(temporaryBase)


}




  return (
    <>

    <div className='group-header'>
      <h2>Co nowego w grupie 2</h2>
     

    </div>

    <div className='password-field'>
      <input className='password' placeholder='admin field' type='password'></input>
      <button onClick={passwordCheck}></button>
    </div>

  

    {password ? 
    <> 
     <div className='group-container'>
          <label>Nazwa wydarzenia</label>
          <input type='text'  value={inputField1} onChange={ (e) =>setInputField1(e.target.value)}/>
          

          <label>Data</label>
          <input type='date'value={inputField2} onChange={ (e) =>setInputField2(e.target.value)}/>
          

          <label>Opis</label>
          <input type='text' value={inputField3} onChange={ (e) =>setInputField3(e.target.value)}/>
          <br/>

          <button onClick={saveDataToFireStore}>Zapisz</button>
      </div>
      </>
      : ''}

      <div className='group-btn'>
         <button  onClick={handlefetchData}>Pokaz wydarzenia grupy</button>
      </div>
     
      
      <div className='group-container'>
     {firestoreValues && firestoreValues.map( (item) => {

      
      return(
        <>
         <div className='group-element'>
           <h1>{item.text}</h1>
           <h3>{item.date}</h3>
           <p>{item.description}</p>
           </div>
        </>
      )
    
})}


    
     

     
      
    </div>
   <button className='group-button'><Link to={'/'} style={ {color:'white' , textDecoration:'none'}}>Powrot do strony glownej</Link></button>

   </>
  )
}
export default Grupa2