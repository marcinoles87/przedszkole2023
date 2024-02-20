import React, { useState } from 'react';
import './styleGrup.css';
import { Link } from 'react-router-dom';
import { getFirestore , getDoc , collection, addDoc , doc } from 'firebase/firestore';


function Grupa2() {

const [inputField1 , setInputField1] = useState('')
const [inputField2 , setInputField2] = useState('')
const [inputField3 , setInputField3] = useState('')

const [firestoreValues , setFirestoreValue ] = useState([])

const db = getFirestore();

console.log(db)

const saveDataToFireStore = async () => {

  const docRef = await addDoc(collection(db,'newText'), {
    text : inputField1 ,
    date : inputField2 ,
    description : inputField3

  });
  alert('data base update')


}

const handlefetchData = async () =>{

  const docRef = doc(db , 'newText' , 'v7MEMlhG5jJ7hZf2ITBV')

  getDoc(docRef)
  .then( (doc) => {
    
    
    
  })

  // const querySnapshot = await getDoc(collection(db,'newText'));
  // const temporaryArray = [];

  // console.log(querySnapshot)

  // querySnapshot.forEach( (doc) => {
  //   temporaryArray.push(doc.data());

  // })

  // console.log(temporaryArray)
  // setFirestoreValue(temporaryArray)

}


  return (
    <>

    <div className='group-header'>
      <h2>Co nowego w grupie 2</h2>
     

    </div>
    <div className='group-container'>
    <label>Nazwa wydarzenia</label>
      <input type='text'  value={inputField1} onChange={ (e) =>setInputField1(e.target.value)}/>
      <br/>

      <label>Data</label>
      <input type='date'value={inputField2} onChange={ (e) =>setInputField2(e.target.value)}/>
      <br/>

      <label>Opis</label>
      <input type='text' value={inputField3} onChange={ (e) =>setInputField3(e.target.value)}/>
      <br/>

      <button onClick={saveDataToFireStore}>Zapisz</button>
      <button onClick={handlefetchData}>Pokaz wydarzenia</button>

     {firestoreValues.map( (item , index) => {
      return(
        <>
         <div className='group-element' key={index}>
           <h1>{item.inputField1}</h1>
           <h3>{item.inputField2}</h3>
           <p>{item.inputField3}</p>
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