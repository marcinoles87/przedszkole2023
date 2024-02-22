import React, { useState } from 'react';
import './styleGrup.css';
import { Link } from 'react-router-dom';
import { getFirestore  , collection, addDoc ,  getDocs } from 'firebase/firestore';
import { projectStorage } from '../../firebase/config';
import  {v4} from 'uuid'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';


function Grupa3() {

const [inputField1 , setInputField1] = useState('')
const [inputField2 , setInputField2] = useState('')
const [inputField3 , setInputField3] = useState('')
const [firestoreValues , setFirestoreValue ] = useState([])
const [password , setPassword] = useState(false)

const [imgs , setImgs] = useState('')


const db = getFirestore();

const passwordCheck = (e) => {
  const pass = document.querySelector('.password').value
  if(pass === 'monikaK'){
    setPassword(true)
  }
}


const handlefetchData = async () =>{

  const querySnapShot = await getDocs(collection(db,"grupa3"));
  const temporaryBase = []
  

  querySnapShot.forEach( (doc) => {
    temporaryBase.push(doc.data())
  });

  setFirestoreValue(temporaryBase)
}

const handleUpload = (e) => {
  console.log(e.target.files[0])
  const imgs = ref(projectStorage , `imagesGrupa3/${v4()}`);
  uploadBytes(imgs,e.target.files[0]).then(data =>{
    
    getDownloadURL(data.ref).then(val =>{
      
      setImgs(val)
    })
  })
}

const saveDataToFireStore = async () => {

  const docRef = await addDoc(collection(db,'grupa3'), {
    text : inputField1 ,
    date : inputField2 ,
    imgUrl : imgs,
    description : inputField3

  });
  alert('data base update')


}

const handleModal = (e) => {
   
  let el = e.target;
  el.classList.toggle('img-modal')

}



  return (
    <>

    <div className='group-header'>
      <h2>Co nowego w grupie 3</h2>
     

    </div>

    <div className='password-field'>
      <input className='password' placeholder='admin field' type='password'></input>
      <button onClick={passwordCheck}>V</button>
    </div>

  

    {password ? 
    <> 
     <div className='group-container'>
          <label>Nazwa wydarzenia</label>
          <input type='text'  value={inputField1} onChange={ (e) =>setInputField1(e.target.value)}/>
          

          <label>Data</label>
          <input type='date'value={inputField2} onChange={ (e) =>setInputField2(e.target.value)}/>

          
          <input type='file' onChange={ (e) => handleUpload(e)}></input>
          

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
           <img src={item.imgUrl} alt='img_grupa3' className='img-group'  onClick={handleModal}></img>
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
export default Grupa3