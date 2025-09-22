import React, { useState } from 'react';
import './styleGrup.css';
import { Link } from 'react-router-dom';
import { getFirestore  , collection, addDoc ,  getDocs , deleteDoc , doc } from 'firebase/firestore';
import { projectStorage } from '../../firebase/config';
import  {v4} from 'uuid'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';


function Grupa2() {

const [inputField1 , setInputField1] = useState('')
const [inputField2 , setInputField2] = useState('')
const [inputField3 , setInputField3] = useState('')
const [firestoreValues , setFirestoreValue ] = useState([])
const [password , setPassword] = useState(false)

const [imgs , setImgs] = useState('')
const [imgs2 , setImgs2] = useState('')
const [imgs3 , setImgs3] = useState('')


const db = getFirestore();

const passwordCheck = (e) => {
  const pass = document.querySelector('.password').value
  if(pass === 'monika'){
    setPassword(true)
  }
}


const handlefetchData = async () =>{

  const querySnapShot = await getDocs(collection(db,"grupa2"));
  const temporaryBase = []
  

  querySnapShot.forEach( (doc) => {
    temporaryBase.push(doc.data())
  });

  setFirestoreValue(temporaryBase)
}

const handleUpload = (e) => {
  
  const imgs = ref(projectStorage , `imagesGrupa2/${v4()}`);

  uploadBytes(imgs,e.target.files[0]).then(data =>{
    getDownloadURL(data.ref).then(val =>{
      setImgs(val)
    })
  })
}

const handleUpload2 = (e) => {
  
  const imgs = ref(projectStorage , `imagesGrupa2/${v4()}`);

  uploadBytes(imgs,e.target.files[0]).then(data =>{
    getDownloadURL(data.ref).then(val =>{
      setImgs2(val)
    })
  })
}

const handleUpload3 = (e) => {
  
  const imgs = ref(projectStorage , `imagesGrupa2/${v4()}`);

  uploadBytes(imgs,e.target.files[0]).then(data =>{
    getDownloadURL(data.ref).then(val =>{
      setImgs3(val)
    })
  })
}

const saveDataToFireStore = async () => {

  const docRef = await addDoc(collection(db,'grupa2'), {
    text : inputField1 ,
    date : inputField2 ,
    imgUrl : imgs,
    imgUrl2 : imgs2,
    imgUrl3 : imgs3,
    description : inputField3

  });
  alert('data base update')

}

const handleModal = (e) => {
   
  let el = e.target;
  el.classList.toggle('img-modal')

}

const deleteDocument = async (item,index) => {

  const querySnapShot = await getDocs(collection(db,"grupa2"));
  
  const deleteElement = querySnapShot._snapshot.docChanges[index]
  const idDeleteElement = deleteElement.doc.key.path.segments[6]
  console.log(idDeleteElement)
  console.log(deleteElement)
  
  await deleteDoc(doc(db, "grupa2", `${idDeleteElement}`));

  alert('Dokument usunięty')
  
  // querySnapShot.forEach( (doc) => {
  //   console.log(doc._document.key.path.segments[6])
    
  
  //   const temporaryforId = []
  
  //   temporaryforId.push(doc._document.key.path.segments[6])
  //   console.log(temporaryforId)
  
  //   setDocid(temporaryforId)
    
  
  // });
  
  // console.log(doc)
  
   
  }



  return (
    <>

    <div className='group-header'>
      <h2>Co nowego w grupie 2</h2>
     

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
          <input type='file' onChange={ (e) => handleUpload2(e)}></input>
          <input type='file' onChange={ (e) => handleUpload3(e)}></input>
          
          

          <label>Opis</label>
          <input type='text' value={inputField3} onChange={ (e) =>setInputField3(e.target.value)}/>
          <br/>

          <button onClick={saveDataToFireStore}>Zapisz</button>
      </div>
      </>
      : ''}

      <div className='group-btn'>
         <button  onClick={handlefetchData}>Pokaż wydarzenia grupy</button>
      </div>
      
      <div className='group-container'>
     {firestoreValues && firestoreValues.map( (item,index) => {

      
      return(
        
         <div className='group-element' key={index}>
           <h1>{item.text}</h1>
           <p>{item.date}</p>
           <p>{item.description}</p>
           <div className='group-element-images'>
               {item.imgUrl ? <img src={item.imgUrl} alt='img_grupa2' className='img-group' onClick={handleModal}></img> : ''}
             {item.imgUrl2 ? <img src={item.imgUrl2} alt='img_grupa2' className='img-group' onClick={handleModal}></img> : ''}
             {item.imgUrl3 ? <img src={item.imgUrl3} alt='img_grupa2' className='img-group' onClick={handleModal}></img> : '' }
             {password ?<button onClick={ () => deleteDocument(item,index)}>Usun dokument</button> : ''}


           </div>
           
           
           </div>
        
      )
    
})}


      
    </div>
   <button className='group-button'><Link to={'/'} style={ {color:'white' , textDecoration:'none'}}>Powrót do strony głównej</Link></button>

   </>
  )
}
export default Grupa2